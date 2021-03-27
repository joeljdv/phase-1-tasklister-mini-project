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
    var checkbox = document.createElement('input');
    checkbox.type = "checkbox"
    checkbox.value = 1
    checkbox.name = "done"
    liTag.appendChild(checkbox)
}




