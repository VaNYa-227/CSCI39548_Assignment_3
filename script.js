let numRows = 0;
let numCols = 0;
let colorSelected;
let baseCol = "white";

//Add a row
function addR() {
    let grid = document.getElementById("grid");
    let tr = document.createElement('tr');
    if (numRows=== 0 && numCols=== 0){
        let td = document.createElement('td');
        td.style.backgroundColor = baseCol;
        td.onclick = function(){
            this.style.backgroundColor = document.getElementById("selectedID").value;
        };
        tr.appendChild(td);
        grid.appendChild(tr);
        numRows = 1;
        numCols = 1;

    }
    else{
        for(let i = 0; i < numCols; i++){
            let td = document.createElement('td');
            td.style.backgroundColor = baseCol;
            td.onclick = function (){
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
    alert("Clicked Add Col")
}

//Remove a row
function removeR() {
    alert("Clicked Remove Row")
}
//Remove a column
function removeC() {
    alert("Clicked Remove Col")
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill(){
    alert("Clicked Fill All")
}

function clearAll(){
    alert("Clicked Clear All")
}

function fillU(){
    alert("Clicked Fill All Uncolored")
}
