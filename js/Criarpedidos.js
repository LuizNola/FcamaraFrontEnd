let allPedidos;

function FilterPedidos() {
  console.log(allPedidos.filter((x) => x.endereco.includes("rua")));
}

window.onload = () => {
  allPedidos = JSON.parse(localStorage.getItem("pedidos"));
  FilterPedidos();
};

function listarPedido() {
 
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

  fetch("http://localhost:5000/user", {
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