let presParaph = document.querySelector(".hide_paragraphe");
let KnowMoreClicked = document.querySelector(".knowMore");

KnowMoreClicked.addEventListener("click", function () {
  presParaph.classList.toggle("collapse");
});

const txtAnim = document.querySelector(".title-dev");

let typewriter = new Typewriter(txtAnim, {
  loop: true,
  deleteSpeed : 20,
});

typewriter
  .typeString("Developpeur Web full stack, ")
  .pauseFor(300)
  .typeString("<strong>back end</strong>")
  .pauseFor(300)
  .deleteChars(8)
  .typeString('<span style="color: #27ae60;">JavaScript</span>')
  .pauseFor(100)
  .deleteChars(10)
  .typeString('<span style="color: red;">PostgresSQL</span>')
  .pauseFor(100)
  .deleteChars(11)
  .typeString('<span style="color: green;">Sportif</span>')
  .pauseFor(100)
  .deleteChars(7)
  .typeString('<span style="color: yellow;">Motivé</span>')
  .pauseFor(100)
  .deleteChars(7)
  .typeString('<span style="color: blue;">Passionné</span>')
  .pauseFor(100)
  .start();