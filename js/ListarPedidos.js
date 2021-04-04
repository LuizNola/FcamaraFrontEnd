

async function listarPedidos(){

    const data = {
        "skipPagination": 0,
        "takeMax": 10
    }

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions =  {
        method: 'GET',
        headers: myHeaders,
        mode: "cors",
    }

    let {element, pages} = await fetch("http://localhost:5000/students", requestOptions)
    .then(response => response.json())
    .then(result => result)
    .catch(error => console.log('error', error));

    
    element.map((item, i) =>{
        let CardPedido = document.querySelector('.material-card').cloneNode(true)
        CardPedido.setAttribute('data-key', i);

        CardPedido.querySelector('.material-card .material-lista strong').innerHTML = item.material_list
        CardPedido.querySelector('.material-card .cidade strong').innerHTML = item.address


        document.querySelector('.main-pedidos ul').append(CardPedido)

    })
}