import { deleteCookie } from "https://jscroot.github.io/cookie/croot.js";

// Fungsi untuk logout
function logout() {
  // Menampilkan Sweet Alert konfirmasi
  Swal.fire({
    icon: "question",
    title: "Konfirmasi",
    text: "Apakah Anda yakin ingin logout?",
    showCancelButton: true,
    confirmButtonText: "Logout",
    cancelButtonText: "Batal",
  }).then((result) => {
    if (result.isConfirmed) {
      // Menghapus message dari local storage
      localStorage.removeItem("message"); // Jika menggunakan local storage
      // Menghapus toke dari cookie
      deleteCookie("token");
      // Redirect ke halaman sign-in.html
      window.location.href = "../signIn.html";
    }
  });
}

logout();
