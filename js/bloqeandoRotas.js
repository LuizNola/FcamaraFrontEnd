window.onload = function bloquandoRota(){

    if(Cookies.get('token') == null){
    window.location.replace("/login.html");
    }
}
