const domInitialize = (function(){
    const container = document.querySelector(".container")

    const createDiv = (n)=>{
        let num = n*n;

        for(let i = 0; i<num;i++){
            const div = document.createElement("div");
            div.classList.add("box")
            container.appendChild(div);
        }
    }
    createDiv(16);
    return {container,createDiv}
})();

