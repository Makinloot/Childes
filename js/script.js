const psw = document.getElementById("password");
const pswIcon = document.getElementById("show-psw-icon");

// show & hide text in password input
let pswVisibility = false;
function showPsw(input, icon) {
  if (pswVisibility) {
    input.setAttribute("type", "password");
    icon.setAttribute("src", "../images/eye.png");
    pswVisibility = false;
  } else {
    input.setAttribute("type", "text");
    icon.setAttribute("src", "../images/eye-off.png");
    pswVisibility = true;
  }
}
