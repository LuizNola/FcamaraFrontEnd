function bloquandoRota(){

    if(Cookies.get('token') == null){
    window.location.replace("/login.html");
    }
}

function logoff(){
    window.location.replace("/");
    Cookies.remove('token');
}