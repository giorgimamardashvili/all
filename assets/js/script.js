window.addEventListener("resize", () => {
  questionAnswer();
});

if (document.readyState !== "loading") {
  textHover();
  lineGrowth();
  questionAnswer();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    textHover();
    lineGrowth();
    questionAnswer();
  });
}


function textHover() {
  const container = document.querySelector(".history__text"),
    button = container.querySelector("a"),
    buttonImg = button.querySelector("img"),
    buttonSpan = button.querySelector("span"),
    h2 = container.querySelector("h2");
  let buttonOldWidth = button.offsetWidth,
    h2OldText = h2.innerText;

  if (window.innerWidth > 1024) {
    container.addEventListener("mouseover", () => {
      buttonImg.classList.add("hide");
      buttonSpan.classList.add("active");
      let buttonNewWidth = buttonOldWidth + buttonSpan.offsetWidth;
      button.style.width = `${buttonNewWidth}px`;
      h2.innerText = "ვინ ვართ ჩვენ?";
    });
    container.addEventListener("mouseout", () => {
      buttonImg.classList.remove("hide");
      buttonSpan.classList.remove("active");
      button.style.width = `${buttonOldWidth}px`;
      h2.innerText = h2OldText;
    });
  } else {
    buttonImg.classList.add("hide");
    buttonSpan.classList.add("active");
    let buttonNewWidth = buttonOldWidth + buttonSpan.offsetWidth;
    button.style.width = `${buttonNewWidth}px`;
  }
}

function lineGrowth() {
  const years = document.querySelector(".years"),
    container = years.querySelector(".years__container"),
    line = container.querySelector(".years__line");

  let containerWidth = container.offsetWidth;
  let containerHeight = container.offsetHeight;

  if (window.innerWidth > 1024) {
    years.addEventListener("mouseover", () => {
      line.style.width = `${
        containerWidth - container.children[1].offsetWidth
      }px`;
    });
    years.addEventListener("mouseout", () => {
      line.style.width = `0px`;
    });
  }
  if (window.innerWidth <= 1024) {
    console.log("ok");

    line.style.height = `${containerHeight * (3 / 4)}px`;
  }
}

function questionAnswer() {
  const items = document.querySelectorAll(".questions__item");

  items.forEach((item) => {
    let question = item.querySelector(".questions__question");
    let answer = item.querySelector(".questions__answer");
    let normalHeight = question.offsetHeight;
    let fullHeight = question.offsetHeight + answer.offsetHeight;
    item.style.height = `${normalHeight}px`;
    question.addEventListener("click", () => {
      if (!item.classList.contains("active")) {
        item.classList.add("active");
        item.style.height = `${fullHeight}px`;
        return;
      }
      item.classList.remove("active");
      item.style.height = `${normalHeight}px`;
    });
  });
}
