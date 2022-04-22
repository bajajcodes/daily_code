const p0 = document.querySelectorAll("p")[0];
const p1 = document.querySelectorAll("p")[1];
const strongs = document.querySelectorAll("p > strong");

p1.addEventListener("mouseenter", () => {
  strongs.forEach((strong) => {
    strong.classList.add("hover");
  });
});

p1.addEventListener("mouseleave", () => {
  strongs.forEach((strong) => {
    strong.classList.remove("hover");
  });
});

// p0.addEventListener("mouseenter", (e) => {
//   e.target.classList.add("highlight");
// });

// p0.addEventListener("mouseleave", (e) => {
//   e.target.classList.remove("highlight");
// });

p0.addEventListener("mouseenter", (e) => {
  const textContent = e.target.textContent;
  const words = textContent.split(" ");
  for (let word of words) {
    if (word.length > 7) {
      e.target.innerHTML = e.target.innerHTML.replace(
        word,
        `<mark>${word}</mark>`
      );
    }
  }
});

p0.addEventListener("mouseleave", (e) => {
  const textContent = e.target.textContent;
  const words = textContent.split(" ");
  for (let word of words) {
    if (word.length > 7) {
      e.target.innerHTML = e.target.innerHTML.replace(
        `<mark>${word}</mark>`,
        word
      );
    }
  }
});
