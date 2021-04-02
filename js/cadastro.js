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

function cadastrarUsuario() {
  if (passInput.value != confirmPassInput.value) {
    alert("Senha e confirmar senha sÃ£o diferentes");
    return;
  }

  var nameInput = document.getElementById('nome').value;
  var emailInput = document.getElementById('email').value;
  var senhaInput = document.getElementById('senha').value;
  
  const data = {
    name: nameInput,
    email: emailInput,
    pass: senhaInput
  };

  var myHeaders = new Headers();

  myHeaders.append('Content-Type', 'application/json');
  
  fetch("http://localhost:5000/user", {
    method: "POST",
    mode: 'cors',
    headers: myHeaders,
    body: JSON.stringify(data)
  }).then(res => {
    console.log(res);
    alert('Cadastro realizado com Sucesso!')}
  )
  .catch(reason => alert(reason));
}
