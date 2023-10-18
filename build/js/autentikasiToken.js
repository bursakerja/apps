document.addEventListener("DOMContentLoaded", function () {
  // Periksa apakah ada token dalam cookie
  const token = getCookie("token");

  if (!token) {
    // Jika tidak ada token, redirect ke halaman signIn.html
    window.location.href = "signIn.html";
  }
});

export default function PostSignUp() {
  // ... (kode login yang ada sebelumnya)
}
