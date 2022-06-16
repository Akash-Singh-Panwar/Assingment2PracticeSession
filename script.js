var add = document.querySelector("#button")
var ul = document.querySelector("ul");
add.addEventListener("click", ()=>{
    let task =  prompt("Enter the task");
    if(task==""){
        alert("Enter valid task");
    }
    const element = document.createElement("li");
    element.innerText = task;
    ul.append(element);
})