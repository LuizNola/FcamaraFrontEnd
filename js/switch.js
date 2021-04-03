const switchBtn1 = document.querySelector("#switch-1");
const switchBtn2 = document.querySelector("#switch-2");

switchBtn1.addEventListener("click", () => {
  switchBtn1.classList.toggle("active");
});

switchBtn2.addEventListener("click", () => {
  switchBtn2.classList.toggle("active");
});