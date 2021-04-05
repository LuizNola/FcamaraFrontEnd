
const nomeInput = document.querySelector("#nome");
const anoInput = document.querySelector("#ano");
const enderecoInput = document.querySelector("#endereco");
const materialInput = document.querySelector("#material");
const contatoInput = document.querySelector("#contact");
const detalhesInput = document.querySelector("#detalhes");
const historiaInput = document.querySelector("#historia");

const criarPedidoBtn = document.querySelector("#criarPedidoBtn");

const fecharPopUpBtn = document.querySelector("#fecharPopUp");




fecharPopUpBtn.addEventListener("click", () => {
  const mask = document.querySelector("#mask");
  mask.classList.remove("active");
});

function criarPedido() {
 


const data = {
  create_user_id: Cookies.get('user_id'),
  nome: nomeInput.value,
  age: anoInput.value,
  address: enderecoInput.value,
  material_list: materialInput.value,
  contact: contatoInput.value,
  Detail: detalhesInput.value,
  report: historiaInput.value
};

console.log(data)


var myHeaders = new Headers();

myHeaders.append("Authorization", "Bearer " + Cookies.get('token'));

myHeaders.append("Content-Type", "application/json");

fetch("http://localhost:5000/students", {
  method: "POST",
  mode: "cors",
  headers: myHeaders,
  body: JSON.stringify(data),
})
  .then((res) => {console.log(res);})
  .catch((reason) => alert(reason));
}
