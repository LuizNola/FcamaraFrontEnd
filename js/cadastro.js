const passInput = document.querySelector("#senha");
const confirmPassInput = document.querySelector("#confirmSenha");
const createBtn = document.querySelector("button[type='submit']");

const passIcon = document.querySelector("#passIcon");
const confirmPassIcon = document.querySelector("#confirmPassIcon");

let showPass = false;
let showConfirmPass = false;

createBtn.addEventListener("click", (e) => {
//   e.preventDefault();

  if (passInput.value != confirmPassInput.value) {
    alert("Senha e confirmar senha sÃ£o diferentes");
    return;
  }
});

passIcon.addEventListener("click", () => {
  showPass = !showPass;

  passInput.type = showPass ? "text" : "password";
  passIcon.src = showPass
    ? "/images/icons/show-pass.svg"
    : "/images/icons/hide-pass.svg";
});

confirmPassIcon.addEventListener("click", () => {
  showConfirmPass = !showConfirmPass;

  confirmPassInput.type = showConfirmPass ? "text" : "password";
  confirmPassIcon.src = showConfirmPass
    ? "/images/icons/show-pass.svg"
    : "/images/icons/hide-pass.svg";
});