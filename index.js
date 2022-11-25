let gridSize = 30;
let grid = document.querySelector('#grid')
let changeGridSizeBtn = document.querySelector('#size');
createGrid();

function createGrid() {
    for (let i = 0; i < gridSize; i++) {
        let row = grid.appendChild(document.createElement('div'));
        row.classList.add("grid-row");
        for (let j = 0; j < gridSize; j++) {
            let item = row.appendChild(document.createElement('div'));
            item.classList.add("grid-item");
        }
    }

    let items = document.querySelectorAll('.grid-item');

    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener("mouseover", () => {
            items[i].style.backgroundColor = "var(--change)"
        })
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

function clearGrid() {
    let rows = document.querySelectorAll('.grid-row');
    
    for (let i = 0; i < gridSize; i++) {
        rows[i].remove();
    }
}

