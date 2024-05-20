const inputBox = document.getElementById("input_box");
const listContainer = document.getElementById("list_container");

function addTask(){
    if(inputBox.value == ''){
        alert("You must Write Something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";          //"\u00d7" is used For X(Deletion) Symbol 
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();


/*
The target property returns the element where the event occured.
The target property is read-only.
The target property returns the element on which the event occurred, 
opposed to the currentTarget property, which returns the element whose event listener triggered the event.
*/