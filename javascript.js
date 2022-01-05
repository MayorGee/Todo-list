const ul = document.getElementById("my-list");
const addInput = document.getElementById("new-task");
const addBtn = document.getElementById("add-btn");
const body = document.getElementById("body");



function addTask() {
  let text = addInput.value;

  if (text === "") {
    alert("You must type something!");
    return;
  } else {
    let paragraph = document.createElement("p");
    let span = document.createElement("span");
    let doneBtn = document.createElement("button");
    let delBtn = document.createElement("button");
    let li = document.createElement("li");

    li.classList.add("list-item");

    paragraph.innerHTML = text;
    li.appendChild(paragraph);

    doneBtn.classList.add("done");
    doneBtn.innerHTML = "Done";

    let att = document.createAttribute("onclick");
    att.value = "checked(this)";
    doneBtn.setAttributeNode(att);

    delBtn.classList.add("delete-item");
    delBtn.innerHTML = "X";

    let attr = document.createAttribute("onclick");
    attr.value = "deleteItem(this)";
    delBtn.setAttributeNode(attr);

    span.appendChild(doneBtn);
    span.appendChild(delBtn);

    li.appendChild(span);

    ul.appendChild(li);

    addInput.value = "";

    document.getElementById("reminder").style.display = "none";
  }
}

addInput.addEventListener("keypress", (e) =>
  e.key === "Enter" ? addTask() : null
);

function checked(e) {
  let clickedBtn = e.parentElement;
  let checkedItem = clickedBtn.parentElement;

  checkedItem.classList.add("checked");
}

function deleteItem(e) {
  let clickedBtn = e.parentElement;
  ul.removeChild(clickedBtn.parentElement);

  if (ul.children.length == 0 )
  {
    document.getElementById("reminder").style.display = "block";
    
  }
}
