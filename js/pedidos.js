let allPedidos;

function FilterPedidos() {
  console.log(allPedidos.filter((x) => x.endereco.includes("rua")));
}

window.onload = () => {
  allPedidos = JSON.parse(localStorage.getItem("pedidos"));
  FilterPedidos();
};
