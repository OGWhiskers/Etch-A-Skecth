const createGrid = (function () {
  const container = document.querySelector(".container");
  const choiceBtn = document.querySelector(".choice");

  choiceBtn.addEventListener("click", () => {
    let choice = prompt("Choice size of grid?");
    container.innerHTML = "";
    const createDiv = (n) => {
      let num = n * n;

      container.style.gridTemplateColumns = `repeat(${choice},1fr)`;

      container.style.gridTemplateRows = `repeat(${choice},1fr`;

      for (let i = 0; i < num; i++) {
        const div = document.createElement("div");

        div.classList.add("box");
        div.addEventListener("mouseenter", () => {
          div.classList.add("hover");
        });
        container.appendChild(div);
      }
    };

    createDiv(choice);
  });
})();

const resetGrid = (function () {
  const reset = document.querySelector(".reset");

  reset.addEventListener("click", () => {
    const divRemove = document.querySelectorAll(".box");
    divRemove.forEach((item) => {
      return item.classList.remove("hover");
    });
  });
})();
