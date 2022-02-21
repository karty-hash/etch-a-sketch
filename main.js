function grids(){
    const grid = document.querySelector("#main");
    
    for(let i = 0; i < 16; i++){
       const grid = document.querySelector("#main");
       const div = document.createElement("div");
       grid.append(div);
       div.setAttribute("class", "container")
       
        
}

    for(let i = 0; i < 16; i++){
       const container = document.querySelectorAll(".container");
       container.forEach(element => {
       const newDiv = document.createElement("div");
       element.append(newDiv);
       newDiv.setAttribute("class", "square");
    })
}
    
}

grids();
    
        
    
const draw = document.querySelector("#draw");
draw.addEventListener("click", () => {
    const div1 = document.querySelectorAll(".square");
    div1.forEach(element => {
        element.addEventListener("mouseenter", () => {
            element.style.backgroundColor = "black";
        })
    })
})

const eraser = document.querySelector("#eraser");
eraser.addEventListener("click", () => {
    const clear = document.querySelectorAll(".square");
    clear.forEach(element => {
        element.addEventListener("mouseenter", () => {
            element.style.backgroundColor = "white"
        })
    })
})

function randomColor(){
    let generateCode = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return generateCode;
}

const rainbow = document.querySelector("#rainbow");
rainbow.addEventListener("click", () => {
    const generateColor = document.querySelectorAll(".square");
    generateColor.forEach(element => {
        element.addEventListener("mouseenter", () => {
            element.style.backgroundColor = randomColor();
        })
    })
})


const button = document.querySelector("#clear");

button.addEventListener("click", () => {
    const myNode = document.querySelector("#main");
    
    while(myNode.lastElementChild){
        myNode.removeChild(myNode.lastElementChild);
    }

    const v = parseInt(prompt("Please enter a value."));

    for(let i = 0; i < v; i++){
        const grid = document.querySelector("#main");
        const div = document.createElement("div");
        grid.append(div);
        div.setAttribute("class", "container1");
    }
    
    
    
    for(let i = 0; i < v; i++){
        const container = document.querySelectorAll(".container1");
        container.forEach(element => {
        const newDiv = document.createElement("div");
        element.append(newDiv);
        newDiv.setAttribute("class", "square1");
    });
    }
    
    
    
    
    for(let i = 0; i < v; i++){
        const square = document.querySelectorAll(".square1");
        square.forEach(element => {
            element.style.width = "100%";
            element.style.height  = "100%";
            element.style.border = "solid 1px black";
        })
    }
    
})

    const eraser1 = document.querySelector("#eraser");
    eraser1.addEventListener("click", () => {
        const clear = document.querySelectorAll(".square1");
        clear.forEach(element => {
            element.addEventListener("mouseenter", () => {
                element.style.backgroundColor = "white"
        })
    })
})


    function randomColor(){
        let generateCode = "#" + Math.floor(Math.random() * 16777215).toString(16);
        return generateCode;
    }

    const rainbow1 = document.querySelector("#rainbow");
    rainbow.addEventListener("click", () => {
        const generateColor = document.querySelectorAll(".square1");
        generateColor.forEach(element => {
            element.addEventListener("mouseenter", () => {
                element.style.backgroundColor = randomColor();
        })
    })
})


     const draw1 = document.querySelector("#draw");
    draw1.addEventListener("click", () => {
        const div1 = document.querySelectorAll(".square1");
        div1.forEach(element => {
            element.addEventListener("mouseenter", () => {
                element.style.backgroundColor = "black";
        })
    })
    
})


const refresh = document.querySelector("#refresh");
refresh.addEventListener("click", () => {
    window.location.reload();
})