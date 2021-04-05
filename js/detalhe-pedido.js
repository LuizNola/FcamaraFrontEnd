const btn = document.querySelector("button[type='submit']");
btn.addEventListener("click", () =>{
    const mask = document.querySelector("#mask");
    mask.classList.add("active");
})

async function detalharPedido(){

    var parameter =  location.search.slice(1);
    var chaveValor = parameter.split('=')
    

    let datails = document.querySelector('.detalhes-a .datails')
    let name = document.querySelector('.item .name')
    let age = document.querySelector('.item .age')
    let adress = document.querySelector('.item .adress')
    let materials = document.querySelector('.item .materials')
    let report = document.querySelector('.item .report') 
    let contact = document.querySelector('.popup .contact')

  

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      let result = await fetch(`http://localhost:5000/students/unique/${chaveValor[1]}`, requestOptions)
        .then(response => response.json())
        .then(result => result)
        .catch(error => console.log('error', error));

        console.log(result[0])

        datails.innerHTML = result[0].Details
        name.innerHTML = result[0].nome
        age.innerHTML = result[0].age
        adress.innerHTML = result[0].address
        materials.innerHTML = result[0].material_list
        report.innerHTML = result[0].report
        contact.innerHTML = result[0].contact

}

window.onload = detalharPedido()