function bloquandoRota(){

    if(Cookies.get('token') == null){
    window.location.replace("/login.html");
    }
}

function logoff(){
    window.location.replace("/");
    Cookies.remove('token');
    Cookies.remove('user_id');
    
}

window.onload = function logged(){

    if(Cookies.get('token') != null){
        document.getElementById('login').style.display = "none"
    }else{
        document.getElementById('logoff').style.display = "none"
    }

}