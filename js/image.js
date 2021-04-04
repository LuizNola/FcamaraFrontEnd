const img = document.querySelector(".img-wrapper img");
const imgWrapper = document.querySelector(".img-wrapper");
const imgInput = document.querySelector(".img-wrapper input[type='file']");

imgWrapper.addEventListener("click", () => {
  imgInput.click();
});

imgInput.addEventListener("change", () => {
  if (imgInput.files && imgInput.files[0]) {
    let reader = new FileReader();

    reader.onload = (e) => {
      img.src = e.target.result;
    };

    reader.readAsDataURL(imgInput.files[0]);

    img.classList.add("active");
  } else {
    img.classList.remove("active");
  }
});
