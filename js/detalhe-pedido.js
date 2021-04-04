const btn = document.querySelector("button[type='submit']");
btn.addEventListener("click", () =>{
    const mask = document.querySelector("#mask");
    mask.classList.add("active");
})
if (Cookies.get('token') === undefined) {
    window.location.href = "login.html";
  }
  