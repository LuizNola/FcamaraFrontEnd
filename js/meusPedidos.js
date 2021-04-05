async function listarPedidos(){

    const data = {
        "create_user_id": Cookies.get('user_id'),
        "skipPagination": 0,
        "takeMax": 10
    }

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + Cookies.get('token'));
    myHeaders.append("Content-Type", "application/json");

const requestOptions =  {
    method: 'POST',
    headers: myHeaders,
    mode: "cors",
    body: JSON.stringify(data)
    
}

let {element, pages} = await fetch("http://localhost:5000/students/specific", requestOptions)
.then(response => response.json())
.then(result => result)
.catch(error => console.log('error', error));

console.log(element)

    element.map((item, i) =>{
        let CardPedido = document.querySelector('.detalhes-meu-pedido').cloneNode(true)
        CardPedido.setAttribute('id', item.id);

        CardPedido.querySelector('.datails').innerHTML = item.Details
        CardPedido.querySelector('.name').innerHTML = item.nome
        CardPedido.querySelector('.age').innerHTML = item.age
        CardPedido.querySelector('.address').innerHTML = item.address
        CardPedido.querySelector('.material').innerHTML = item.material_list
        CardPedido.querySelector('.report').innerHTML = item.report


        CardPedido.querySelector('.btn-recebido').addEventListener('click',(e)=>{
            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Bearer " + Cookies.get('token'));
            myHeaders.append("Content-Type", "application/json");

            var data ={
                id_student:  e.target.closest('.detalhes-meu-pedido').getAttribute('id')
            };

            var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            body:  JSON.stringify(data)
            };

            fetch("http://localhost:5000/students", requestOptions)
            .then(response => response.text())
            .then(result => alert('Pedido Removido da Lista'))
            .catch(error => console.log('error', error));

            location.reload()
        })

        
        

        document.querySelector('.container').append(CardPedido)
    })

}

window.onload = listarPedidos()
