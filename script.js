const domInitialize = (function(){
    const container = document.querySelector(".container")
    const reset = document.querySelector(".reset")

    const createDiv = (n)=>{
        let num = n*n;

        for(let i = 0; i<num;i++){
            const div = document.createElement("div");

            div.classList.add("box")
            div.addEventListener("mouseenter",()=>{
                div.classList.add("hover")
            })
            container.appendChild(div);
        }
    }
    createDiv(16);
    return {container,createDiv,reset}
})();

domInitialize.reset.addEventListener("click",()=>{
    const divRemove = document.querySelectorAll(".box")
    divRemove.forEach((item)=>{
        return item.classList.remove("hover")
    })
})