const domInitialize = (function(){

})();

const createGrid = (function(){
    const choice = prompt("Choice size of grid?");
    const container = document.querySelector(".container");

    container.style.gridTemplateColumns = `repeat(${choice},1fr)`;

    container.style.gridTemplateRows = `repeat(${choice},1fr`;

    const createDiv = (n)=>{
        let num = n * n;

        for(let i = 0; i < num; i++){
            const div = document.createElement("div");
 
            div.classList.add("box")
            div.addEventListener("mouseenter",()=>{
                div.classList.add("hover")
            })
            div.addEventListener("mouseleave",()=>{
                div.classList.remove("hover")
            })
            container.appendChild(div);
        }
    }

    createDiv(choice);
})()

const resetGrid = (function (){
    const reset = document.querySelector(".reset");

    reset.addEventListener("click",()=>{
        const divRemove = document.querySelectorAll(".box")
        divRemove.forEach((item)=>{
            return item.classList.remove("hover")
        })
    })

})()