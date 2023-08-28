let presParaph = document.querySelector(".hide_paragraphe");
let KnowMoreClicked = document.querySelector(".knowMore");

KnowMoreClicked.addEventListener("click", function () {
  presParaph.classList.toggle("collapse");
});

const txtAnim = document.querySelector(".title-dev");

console.log(txtAnim);
new Typewriter(txtAnim, {
  deleteSpeed: 20,
})
  .TypeString("Developpeur Web full stack,")
  .pauseFor(300)
  .typeString("Specialisation back end")
  .start();
