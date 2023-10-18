function signIn() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

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

        // Display success message using SweetAlert
        Swal.fire({
          icon: "success",
          title: "Sign In Successful",
          text: data.message,
        }).then(() => {
          // Redirect to homePelamar.html
          window.location.href = "homePelamar.html";
        });
      } else {
        // Display signin error message using SweetAlert
        Swal.fire({
          icon: "error",
          title: "Sign In Failed",
          text: data.message,
        }).then(() => {
          // Redirect back to signIn.html on failure
          window.location.href = "signIn.html";
        });
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      // Display error message using SweetAlert
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred while signing in. Please try again later.",
      }).then(() => {
        // Redirect back to signIn.html on error
        window.location.href = "signIn.html";
      });
    });
}
