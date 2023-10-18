function checkAuthentication() {
  const token = localStorage.getItem("token");
  console.log(token);
  if (!token) {
    redirectToSignIn();
  } else {
    // Make a GET request to the autentikasi endpoint
    fetch("https://dimasardnt6-ulbi.herokuapp.com/autentikasi", {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 200) {
          // User is authenticated, proceed to index.html or auth/antrian.html
        } else {
          redirectToSignIn();
        }
      })
      .catch((error) => {
        console.log("Error:", error);
        redirectToSignIn();
      });
  }
}

function redirectToSignIn() {
  Swal.fire({
    icon: "info",
    title: "Tidak Bisa Masuk",
    text: "Anda harus Sign In terlebih dahulu",
    showCancelButton: false,
    confirmButtonText: "OK",
  }).then(() => {
    // Redirect to the appropriate sign-in page
    const currentPath = window.location.pathname.split("/").pop();
    if (currentPath === "index.html") {
      window.location.href = "sign-in.html";
    } else {
      window.location.href = "../sign-in.html";
    }
  });
}

// Call the checkAuthentication function when the page loads
window.onload = checkAuthentication;
