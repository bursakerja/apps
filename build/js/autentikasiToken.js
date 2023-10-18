document.addEventListener("DOMContentLoaded", function () {
  const token = getCookie("token");

  // Jika tidak ada token, tampilkan SweetAlert dan redirect ke halaman signIn.html
  if (!token) {
    Swal.fire({
      icon: "warning",
      title: "Oops...",
      text: "Anda belum login!",
      confirmButtonText: "OK",
    }).then(() => {
      window.location.href = "signIn.html";
    });
  }

  // Fungsi untuk mendapatkan nilai cookie berdasarkan nama
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  }
});
