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
        // Save the token in local storage
        localStorage.setItem("token", data.token);

        // Display success message using SweetAlert
        Swal.fire({
          icon: "success",
          title: "Sign In Successful",
          text: "You have successfully signed in.",
          showConfirmButton: false,
          timer: 2000,
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
        });
      }
    })
    .catch((error) => {
      console.log("Error:", error);
      // Display error message using SweetAlert
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred while signing in. Please try again later.",
      });
    });
}
