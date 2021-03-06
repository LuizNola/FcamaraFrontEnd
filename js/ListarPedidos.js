async function listarPedidos(){
    var imgsJson = {
        "images": 
        [
            "http://i.mlcdn.com.br/portaldalu/fotosconteudo/68927.jpg",
        "https://ciclovivo.com.br/wp-content/uploads/2017/01/16129802_1388747494503920_740414504_o.jpg",
        "https://www.guarapari.es.gov.br/uploads/files/noticias/material-escolar.png",
        "https://ccjmt.com.br/wp-content/uploads/2017/12/materiais-1200x675.jpg",
        "https://www.cm-moncorvo.pt/cmtorremoncorvo/uploads/news/image/709/escolar_760x450.jpg",
        "https://catracalivre.com.br/wp-content/thumbnails/DB2vFIkCMS3euIo5rz7aWpW7nlE=/wp-content/uploads/2017/01/iStock-505261864.jpg"
    ]
    }

    var pesquisa = document.querySelector('#txtBusca').value 

    if(pesquisa == ''){
    const data = {
        "skipPagination": 0,
        "takeMax": 10
    }

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions =  {
        method: 'POST',
        headers: myHeaders,
        mode: "cors",
        body: JSON.stringify(data)
        
    }

    let {element, pages} = await fetch("http://localhost:5000/students/all", requestOptions)
    .then(response => response.json())
    .then(result => result)
    .catch(error => console.log('error', error));

    console.log(element)

   

    
    element.map((item, i) =>{

        let img = imgsJson.images[Math.floor(Math.random() *imgsJson.images.length)]


        let CardPedido = document.querySelector('.material-card').cloneNode(true)
        CardPedido.setAttribute('data-key', i);

        CardPedido.querySelector('.material-card a').href = `detalhe-pedido.html?id=${item.id}`
        CardPedido.querySelector('.material-card .material-lista strong').innerHTML = item.material_list
        CardPedido.querySelector('.material-card .cidade strong').innerHTML = item.address
        CardPedido.querySelector('.material-card .material-img').src = img
        

        document.querySelector('.main-pedidos ul').append(CardPedido)

    })
}else{

        document.querySelector('.main-pedidos ul').remove()

        const newUl =  document.createElement('ul')

        document.querySelector('.main-pedidos').append(newUl)
        
       const data = {
            "searchParameters": pesquisa,
            "skipPagination": 0,
            "takeMax": 10
        }

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
    
        const requestOptions =  {
            method: 'POST',
            headers: myHeaders,
            mode: "cors",
            body: JSON.stringify(data)
            
        }
    
        let {element, pages} = await fetch("http://localhost:5000/students/search", requestOptions)
        .then(response => response.json())
        .then(result => result)
        .catch(error => console.log('error', error));

        

      

        element.map((item, i)=>{
            let CardPedido = document.querySelector('.material-card').cloneNode(true)
            CardPedido.setAttribute('data-key', i);

            let img = imgsJson.images[Math.floor(Math.random() *imgsJson.images.length)]

            CardPedido.querySelector('.material-card a').href = `detalhe-pedido.html?id=${item.id}`
            CardPedido.querySelector('.material-card .material-lista strong').innerHTML = item.material_list
            CardPedido.querySelector('.material-card .cidade strong').innerHTML = item.address
            CardPedido.querySelector('.material-card .material-img').src = img
            
    
            document.querySelector('.main-pedidos ul').append(CardPedido)
        })
        
    }

}

window.onload = listarPedidos()