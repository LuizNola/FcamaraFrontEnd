

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

}