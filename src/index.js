document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("create-task-form").addEventListener("submit",addList)
});


function addList(event){
    event.preventDefault()
    const input = event.target.querySelector("#new-task-description").value
    const liTag = document.createElement('li')
    const task = document.querySelector("#tasks")
    liTag.textContent = input
    task.appendChild(liTag)
    event.target.querySelector("#new-task-description").value = ""
    let deleteButton = document.createElement("button")
    deleteButton.style.fontSize = "8px"
    deleteButton.style.background = "white"
    deleteButton.innerText = "X"
    deleteButton.onclick = ()=>liTag.remove()
    liTag.appendChild(deleteButton)
}




