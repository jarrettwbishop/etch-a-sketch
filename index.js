let gridSize = 30;
let grid = document.querySelector('#grid')
let changeGridSizeBtn = document.querySelector('#size');
let clearBtn = document.querySelector('#clear');
let colorBtn = document.querySelector('#color');
let color = "var(--change)";
createGrid();

function getRandomColor() {
    let characters = "0123456789ABCDEF";
    let randomColor = "#"
    for (let i = 0; i < 6; i++) {
        randomColor += characters[Math.floor(Math.random() * 16)];
    }
    return randomColor;
}

function shadeColor(color) {
    // get hex values for R,G,B and turn them into rgb values (0-255)
    console.log("color: " + color)
    let R = parseInt(color.substring(1,3),16);
    let G = parseInt(color.substring(3,5),16);
    let B = parseInt(color.substring(5,7),16);

    console.log("to rgb: " + R + ", " + G + ", " + B);

    // add 10% darkness. remove decimals
    R = R - 10;
    G = G - 10;
    B = B - 10;

    console.log("color change: " + R + ", " + G + ", " + B);

    // make sure values are still valid
    R = (R<255)?R:255;  
    G = (G<255)?G:255;  
    B = (B<255)?B:255; 

    console.log("New Color: " + R + ", " + G + ", " + B);

    // convert R,G,B values back to hex
    RR = R.toString(16).length === 1 ? '0' + R.toString(16) : R.toString(16)
    GG = G.toString(16).length === 1 ? '0' + G.toString(16) : G.toString(16)
    BB = B.toString(16).length === 1 ? '0' + B.toString(16) : B.toString(16)

    console.log("#" + RR + GG + BB)
    return "#" + RR + GG + BB;
}
function createGrid() {
    for (let i = 0; i < gridSize; i++) {
        let row = grid.appendChild(document.createElement('div'));
        row.classList.add("grid-row");
        for (let j = 0; j < gridSize; j++) {
            let item = row.appendChild(document.createElement('div'));
            item.classList.add("grid-item");
            item.style.backgroundColor = "#FFFFFF";
        }
    }

    let items = document.querySelectorAll('.grid-item');

    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener("mouseover", () => {
            if (color === "var(--change)") {
                items[i].style.backgroundColor = color;
            } else if (color === "random") {
                items[i].style.backgroundColor = getRandomColor()
            }
        })
    }
}

function clearGrid() {
    let rows = document.querySelectorAll('.grid-row');

    for (let i = 0; i < gridSize; i++) {
        rows[i].remove();
    }
}

changeGridSizeBtn.addEventListener('click', () => {
    let size = prompt("Select a grid size between 16 and 100", "16")
    Number(size);
    if (size < 16) {
        size = 16;
    }
    if (size > 100) {
        size = 100;
    }
    clearGrid();
    gridSize = size;
    createGrid();

})

clearBtn.addEventListener('click', () => {
    clearGrid();
    createGrid();
})

colorBtn.addEventListener('click', () => {
    if (color === "var(--change)") {
        color = "random";
    } else if (color === "random") {
        color = "var(--change)"
    } 
})