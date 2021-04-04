const materiais = [];
const minusBtn = document.querySelector("#minusBtn");
const plusBtn = document.querySelector("#plusBtn");
const quantity = document.querySelector("#quantity");

const anoInput = document.querySelector("#ano");
const materialInput = document.querySelector("#material");
const detalhesInput = document.querySelector("#detalhes");
const enderecoInput = document.querySelector("#endereco");
const historiaInput = document.querySelector("#historia");

const addMaterialBtn = document.querySelector("#add-material");
const criarPedidoBtn = document.querySelector("#criarPedidoBtn");

const fecharPopUpBtn = document.querySelector("#fecharPopUp");

minusBtn.addEventListener("click", () => {
  if (quantity.innerHTML > 0) quantity.innerHTML--;
  else quantity.innerHTML = 0;
});

plusBtn.addEventListener("click", () => {
  quantity.innerHTML++;
});

addMaterialBtn.addEventListener("click", () => {
  if (quantity.innerHTML == 0) {
    alert("Quantidade não pode ser zero");
    return;
  }

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
  if (materiais.length < 1) {
    alert("Pelo menos um material deve ser adicionado");
    return;
  }

  const switchBtn1 = document.querySelector("#switch-1");
  const switchBtn2 = document.querySelector("#switch-2");

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
