let gridSize = 30;
let grid = document.querySelector('#grid')
let changeGridSizeBtn = document.querySelector('#size');

for (let i = 0; i < gridSize; i++) {
    let column = grid.appendChild(document.createElement('div'));
    for (let j = 0; j < gridSize; j++) {
        let row = column.appendChild(document.createElement('div'));
        row.classList.add("grid-item");
    }
}

let item = document.querySelectorAll('.grid-item');

for (let i = 0; i < item.length; i++) {
    item[i].addEventListener("mouseover", () => {
        item[i].style.backgroundColor = "var(--change)"
    })
}

changeGridSizeBtn.addEventListener('click', () => {
    let size = prompt("Select a grid size up to 100", "16")
})


