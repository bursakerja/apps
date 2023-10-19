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
      document.cookie =
        "token= ; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      // Redirect ke halaman sign-in.html
      window.location.href = "../signIn.html";
    }
  });
}
