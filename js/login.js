const passInput = document.querySelector("#senha");
const passIcon = document.querySelector("#passIcon");
const createBtn = document.querySelector("button[type='submit']");

let showPass = false;

createBtn.addEventListener("click", (e) => {
  //   e.preventDefault();  
});

passIcon.addEventListener("click", () => {
  showPass = !showPass;

  passInput.type = showPass ? "text" : "password";
  passIcon.src = showPass
    ? "../../images/icons/show-pass.svg"
    : "../../images/icons/hide-pass.svg";
});