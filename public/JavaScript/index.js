let presParaph = document.querySelector(".hide_paragraphe");
let KnowMoreClicked = document.querySelector(".knowMore");

KnowMoreClicked.addEventListener("click", function () {
  presParaph.classList.toggle("collapse");
});

const txtAnim = document.querySelector(".title-dev");

let typewriter = new Typewriter(txtAnim, {
  loop: true,
  deleteSpeed: 15,
  delay: 80,
});

typewriter
  .typeString("Developpeur Web full stack, ")
  .pauseFor(300)
  .typeString("<strong>back end</strong>")
  .pauseFor(300)
  .deleteChars(8)
  .typeString('<span style="color: #E19641;">JavaScript</span>')
  .pauseFor(100)
  .deleteChars(10)
  .typeString('<span style="color: #275D84;">PostgreSQL</span>')
  .pauseFor(100)
  .deleteChars(10)
  .typeString('<span style="color: #28A050;">Sportif</span>')
  .pauseFor(100)
  .deleteChars(7)
  .typeString('<span style="color: #4178F0;">Motivé</span>')
  .pauseFor(100)
  .deleteChars(7)
  .typeString('<span style="color: #C89696;">Passionné</span>')
  .pauseFor(100)
  .start();