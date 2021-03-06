let numRows = 0;
let numCols = 0;
let colorSelected;
let baseCol = "white"; //Choosen base color

//Add a row
function addR() {
    let grid = document.getElementById("grid");
    let tr = document.createElement('tr');
    if (numRows=== 0 && numCols=== 0){ //If not on screen
        let td = document.createElement('td');
        td.style.backgroundColor = baseCol;
        td.onclick = function(){ //Click color
            this.style.backgroundColor = document.getElementById("selectedID").value;
        };
        tr.appendChild(td);
        grid.appendChild(tr);
        numRows = 1;
        numCols = 1;

    }
    else{
        for(let i = 0; i < numCols; i++){ //Make td
            let td = document.createElement('td');
            td.style.backgroundColor = baseCol;
            td.onclick = function (){ //Click color
                this.style.backgroundColor = document.getElementById("selectedID").value;
            };
            tr.appendChild(td);
        }
        grid.appendChild(tr);
        numRows++;
}
}
//Add a column
function addC() {
    let grid = document.getElementById("grid");
    let tr = document.createElement("tr");
    let row = grid.children;
    if (numRows=== 0 && numCols== 0){
        let td = document.createElement("td");
        td.style.backgroundColor = baseCol;
        td.onclick = function (){ // Click color
            this.style.backgroundColor = document.getElementById("selectedID").value;
        };
        tr.appendChild(td);
        grid.appendChild(tr);
        numCols = 1;
        numRows = 1;
    }
    else{
        for(let i = 0; i < row.length; i++){ //Make td
            let cell = document.createElement("td");
            cell.style.backgroundColor = baseCol;
            cell.onclick = function (){ //Click color
                this.style.backgroundColor = document.getElementById("selectedID").value;
            };
            row[i].appendChild(cell);
        }
        numCols++;
    }
}

//Remove a row
function removeR() {
    let grid = document.getElementById("grid");
    let rowEnd = grid.lastElementChild;
    grid.removeChild(rowEnd);
    numRows--;
    if (numRows=== 0){ numCols = 0;} //Reset
}
//Remove a column
function removeC() {
    for (let i = 0; i < numRows; i++){ //Remove end
        let row = document.querySelectorAll("tr")[i];
        let rowEnd = row.lastChild;
        row.removeChild(rowEnd);
    }
    numCols--;
    if (numCols=== 0){ numRows = 0;} //Reset
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill(){ //Fill boxes with color
    let pickColor = document.getElementById("selectedID").value;
    for (let i = 0; i < numRows; i++){
        let row = document.querySelectorAll("tr")[i];
        let nodes = row.childNodes;

        for (let element of nodes){ // Loop iterating over iterable objects
            element.style.backgroundColor = pickColor;
        }
    } 
}

function clearAll(){ //Clear all boxes
    for (let i = 0; i < numRows; i++){
        let row = document.querySelectorAll("tr")[i];
        let nodes = row.childNodes;
        for (let element of nodes){ // Loop iterating over iterable objects
            element.style.backgroundColor = baseCol;
        }
    }
}

function fillU(){ //Fill not colored
    let pickColor = document.getElementById("selectedID").value;
    for(let i = 0; i < numRows; i++){
        let row = document.querySelectorAll("tr")[i];
        let nodes = row.childNodes;
        for (let element of nodes){ // Loop iterating over iterable objects
            if (element.style.backgroundColor === baseCol){
                element.style.backgroundColor = pickColor;
            }
        }
    }
}
