// HTML Variables
let outputEl = document.getElementById("list");

// Ranking List Array
let todoarray = [""];

// Button Event Listener
document.getElementById("todobtn").addEventListener("click", todobtnClicked);

function todobtnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu").value;

  // Implement Menu Selection
  if (selection === "add") {
    addItem();
  } else if (selection === "remove-last") {
    removeLast();
  } else if (selection === "insert") {
    insert();
  } else if (selection === "remove-pos") {
    removePos();
  } else if (selection === "move") {
    move();
  } else if (selection === "edit") {
    edit();
  } else if (selection == "empty") {
    empty();
  }

  // Redraw todoarray after changes have been made
  drawtodoarray();
}

// FUNCTIONS TO DEFINE
function drawtodoarray() {
  outputEl.innerHTML = "";
  for (let i = 1; i < todoarray.length; i++) {
    outputEl.innerHTML += `<p> ${i}: ${todoarray[i]} </p>`;
  }
}

function addItem() {
  let item = prompt("Enter item:");
  todoarray.push(`${item}`);
}

function removeLast() {
  todoarray.pop();
}

function insert() {
  let itemRank = prompt("Insert Position:");
  let item = prompt("Item to insert:");
  todoarray.splice(itemRank, 0, item);
}

function removePos() {
  let itemRemove = prompt("Position to remove:");
  todoarray.splice(itemRemove, 1);
}

function move() {
  let olditemRank = prompt("Move Item From:");
  let newitemRank = prompt("Move Item To:");
  let item = todoarray[olditemRank];
  todoarray.splice(olditemRank, 1);
  todoarray.splice(newitemRank, 0, item);
}

function edit() {
  let itemRank = prompt("Enter Position:");
  let newItem = prompt("Replace with:");
  todoarray.splice(itemRank, 1, newItem);
}

function empty() {
  todoarray = [""];
}
