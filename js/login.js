const passInput = document.querySelector("#senha");
const passIcon = document.querySelector("#passIcon");
const createBtn = document.querySelector("button[type='submit']");

let showPass = false;


passIcon.addEventListener("click", () => {
  showPass = !showPass;

  passInput.type = showPass ? "text" : "password";
  passIcon.src = showPass
    ? "../../images/icons/show-pass.svg"
    : "../../images/icons/hide-pass.svg";
});

function login() {

  var emailInput = document.getElementById("email").value;
  var senhaInput = document.getElementById("senha").value;

  const data = {
    email: emailInput,
    pass: senhaInput,
  };

  var myHeaders = new Headers();

  myHeaders.append("Content-Type", "application/json");

  fetch("http://localhost:5000/session", {
    method: "POST",
    mode: "cors",
    headers: myHeaders,
    body: JSON.stringify(data),
  })
  .then((res) => {
    res.json().then(response => {
      // setando o token para um dia
      if(response.status != 'error'){
      Cookies.set('token', response.token, { expires: 1 });
      Cookies.set('user_id', response.user.id)
      window.location.href = "index.html";}
      else{
        alert(response.message)
      }
    })
  }).catch((reason) => alert(reason));
  
}