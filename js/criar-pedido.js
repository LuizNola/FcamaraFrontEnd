const materiais = [];
const quantity = document.querySelector("#quantity");

const anoInput = document.querySelector("#ano");
const materialInput = document.querySelector("#material");
const detalhesInput = document.querySelector("#detalhes");
const enderecoInput = document.querySelector("#endereco");
const historiaInput = document.querySelector("#historia");

const addMaterialBtn = document.querySelector("#add-material");
const criarPedidoBtn = document.querySelector("#criarPedidoBtn");

const fecharPopUpBtn = document.querySelector("#fecharPopUp");

addMaterialBtn.addEventListener("click", () => {

  materiais.push({
    material: materialInput.value,
    detalhes: detalhesInput.value,
    quantidade: quantity.innerHTML,
  });

  quantity.innerHTML = 0;
  materialInput.value = "";
  detalhesInput.value = "";
});

criarPedidoBtn.addEventListener("click", (e) => {

  const pedido = {
    materiais,
    endereco: enderecoInput.value,
    ano: anoInput.value,
    historia: historiaInput.value,
    mostrarMeuNome: switchBtn1.classList.contains("active"),
    mostrarNomeAluno: switchBtn2.classList.contains("active"),
  };

  e.preventDefault();

  const pedidos = JSON.parse(window.localStorage.getItem("pedidos"));
  window.localStorage.setItem(
    "pedidos",
    pedidos?.length > 0 ? pedidos.push(pedido) : [pedido]
  );

  const mask = document.querySelector("#mask");
  mask.classList.add("active");
});

fecharPopUpBtn.addEventListener("click", () => {
  const mask = document.querySelector("#mask");
  mask.classList.remove("active");
});

function criarPedido() {
 
  var materialInput = document.getElementById("material").value;
  var detalhesInput = document.getElementById("detalhes").value;
  var enderecoInput = document.getElementById("endereco").value;
  var anoInput = document.getElementById("ano").value;
  var historiaInput = document.getElementById("historia").value;

  const data = {
    material: materialInput,
    detalhes: detalhesInput,
    endereco: enderecoInput,
    ano: anoInput,
    historia: historiaInput,
  };

  var myHeaders = new Headers();

  myHeaders.append("Content-Type", "application/json");

  fetch("http://localhost:5000/students", {
    method: "POST",
    mode: "cors",
    headers: myHeaders,
    body: JSON.stringify(data),
  })
    .then((res) => {
      console.log(res);
      
      const mask = document.querySelector("#mask");
      mask.classList.add("active");
    })
    .catch((reason) => alert(reason));
}
if (Cookies.get('token') === undefined) {
  window.location.href = "login.html";
}
