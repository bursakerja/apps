import { postWithToken } from "https://jscroot.github.io/api/croot.js";
import { setInner, getValue } from "https://jscroot.github.io/element/croot.js";

function setCookieWithExpireHour(cname, cvalue, exhour) {
  const d = new Date();
  d.setTime(d.getTime() + exhour * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie =
    cname +
    "=" +
    cvalue +
    ";" +
    expires +
    "Secure;HttpOnly;SameSite=Strict;path=/pelamar";
}

export default function PostSignUp() {
  let target_url =
    "https://asia-southeast2-bursakerja-project.cloudfunctions.net/bursakerja-post";
  let tokenkey = "token";
  let tokenvalue =
    "3108501ddf2f9aa33f3a7c0e387339b131d8a4d22818feb511b0fe1bc3a16b36";
  let datainjson = {
    email: getValue("email"),
    password: getValue("password"),
  };

  // Panggil fungsi postWithToken
  postWithToken(target_url, tokenkey, tokenvalue, datainjson, responseData);
  //   alert("testing2");
}

function responseData(result) {
  if (result.token) {
    // Jika memiliki token, simpan token di cookie
    setCookieWithExpireHour("token", result.token, 2);
    // Simpan pesan hasil respons di local storage
    localStorage.setItem("message", result.message);
    // Tampilkan SweetAlert berhasil login
    Swal.fire({
      icon: "success",
      title: "Login Successful",
      text: "You have successfully logged in.",
    }).then(() => {
      // Redirect to homePelamar.html
      window.location.href = "homePelamar.html";
    });
  } else {
    // Jika tidak memiliki token, tampilkan SweetAlert pesan kesalahan
    Swal.fire({
      icon: "error",
      title: "Login Failed",
      text: result.message,
    });
  }
}
