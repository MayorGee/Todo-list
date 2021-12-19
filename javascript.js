const ul = document.getElementById("my-list");
const addInput = document.getElementById("new-task");
const addBtn = document.getElementById("add-btn");

function addTask() {
  let text = addInput.value;

  if (text === "") {
    alert("You must type something!");
    return;
  }

  let li = document.createElement("li");
  let paragraph = document.createElement("p");
  let span = document.createElement("span");
  let button = document.createElement("button");

  paragraph.innerHTML = text;
  li.appendChild(paragraph);

  button.classList.add("remove");
  button.innerHTML = "Done";
  let att = document.createAttribute("onclick");
  att.value = "checked(this)";
  button.setAttributeNode(att);

  span.appendChild(button);

  li.appendChild(span);

  ul.appendChild(li);

  addInput.value = "";
  
}

function checked(e) {
 let clickedBtn = e.parentElement;  //span is the immediate parent
 clickedBtn.parentElement.classList.add("checked"); //li is the direct parent of the span
}


addInput.addEventListener("keypress", ((e) => (e.key === "Enter") ? addTask() : null)); //so that it saves the text once enter is clicked