import { postWithToken } from "https://jscroot.github.io/api/croot.js";
import { setInner, getValue } from "https://jscroot.github.io/element/croot.js";
import { setCookieWithExpireHour } from "https://jscroot.github.io/cookie/croot.js";

export default function PostSignUp() {
  alert("testing");
  let target_url =
    "https://asia-southeast2-bursakerja-project.cloudfunctions.net/bursakerja-post";
  let tokenkey = "token";
  let tokenvalue =
    "3108501ddf2f9aa33f3a7c0e387339b131d8a4d22818feb511b0fe1bc3a16b36";
  let datainjson = {
    email: getValue("email"),
    password: getValue("password"),
  };

  postWithToken(target_url, tokenkey, tokenvalue, datainjson, responseData);
  alert("testing2");
}

function responseData(result) {
  setInner("pesan", result.message);
  setCookieWithExpireHour("token", result.token, 2);
  alert("test3");
}
