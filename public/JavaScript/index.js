const presParaph = document.getElementsByClassName("presentation__paraph__hide");

const KnowMoreClicked = document.getElementsByClassName("knowMore");

function seeParaph() {
    KnowMoreClicked.addEventListener(
      "click",
      presParaph.removeClass("collapse")
    );
}

seeParaph();