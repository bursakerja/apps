function signIn() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Make a POST request to the sign-in endpoint
  fetch(
    "https://asia-southeast2-bursakerja-project.cloudfunctions.net/bursakerja-post",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }
  )
    .then((response) => response.json())
    .then((data) => {
      if (data.status === 200) {
        // Signin success
        // Save the token in cookies with an expiry time (in seconds)
        const expiryTime = 3600; // 1 hour (in seconds)
        const now = new Date();
        now.setTime(now.getTime() + expiryTime * 1000);
        document.cookie = `token=${
          data.token
        }; expires=${now.toUTCString()}; path=/`;

        // Redirect to homePelamar.html
        window.location.href = "homePelamar.html";
      } else {
        // Display signin error message using SweetAlert
        Swal.fire({
          icon: "error",
          title: "Sign In Failed",
          text: data.message,
        });
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      // Display error message using SweetAlert
      Swal.fire({
        icon: "error",
        title: "Error",
        text: data.message,
      });
    });
}
