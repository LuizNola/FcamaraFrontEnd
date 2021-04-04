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
