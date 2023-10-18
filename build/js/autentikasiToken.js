document.addEventListener("DOMContentLoaded", function () {
  const token = getCookie("token");

  // Jika tidak ada token, redirect ke halaman signIn.html
  if (!token) {
    window.location.href = "signIn.html";
  }

  // Fungsi untuk mendapatkan nilai cookie berdasarkan nama
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  }
});
