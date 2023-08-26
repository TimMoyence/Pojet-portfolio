let presParaph = document.querySelector(".hide_paragraphe");
let KnowMoreClicked = document.querySelector('.knowMore');


KnowMoreClicked.addEventListener("click", function() {
  presParaph.classList.toggle("collapse")
});
