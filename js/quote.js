const prevBtn = document.querySelector(".btn.prev");
const nextBtn = document.querySelector(".btn.next");
const reviewsList = document.querySelector(".reviews");

function createReview(review) {
  const li = document.createElement("li");
  li.classList.add("review");

  const img = document.createElement("img");
  img.src = review.profile ? `/images/${review.profile}` : "/images/empty.svg";

  const p = document.createElement("p");
  p.innerHTML = `"${review.review}"`;

  const small = document.createElement("small");
  small.innerHTML = review.user;

  li.appendChild(img);
  li.appendChild(p);
  li.appendChild(small);

  reviewsList.appendChild(li);
}

async function main() {
  const response = await fetch("/reviews.json");
  const reviews = await response.json();

  reviews.forEach((x) => {
    createReview(x);
  });
}

reviewsList.addEventListener("wheel", (event) => {
  event.deltaY > 0
    ? reviewsList.scrollBy(500, 0)
    : reviewsList.scrollBy(-500, 0);
});

main();
