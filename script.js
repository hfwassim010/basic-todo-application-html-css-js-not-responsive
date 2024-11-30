var taskId = 1

function add(){
    let task = document.getElementById("task").value
    let tasksList = document.querySelector(".tasks-list")
    let taskRef = `t-${taskId}`
    content = 
    `
    <div id="${taskRef}" class="task-box">
        <textarea readonly>${task}</textarea>
        <div class="btn">
            <button class="del-btn" onclick="deleteTask('${taskRef}')">Delete</button>
            <button class="edit-btn" onclick="edit('${taskRef}')">Edit</button>
        </div>
    </div>
    `
    tasksList.innerHTML += content

    taskId++
}


function deleteTask(id) {
    let element = document.getElementById(id)
    element.remove()
}

function clearTasks(){
    let tasksList = document.querySelector(".tasks-list")
    tasksList.innerHTML = ""
}

function edit(id){
    
    let elements = document.getElementById(id).children
    elements[0].readOnly = false
    let elementsBtn = elements[1]

    editSaveBtn = elementsBtn.children[1]

    editSaveBtn.textContent = "save"
    editSaveBtn.setAttribute("class","save-btn")
    
    editSaveBtn.addEventListener("click",()=>{
        if (editSaveBtn.textContent.toLowerCase() == "save"){
            elements[0].readOnly = true
            editSaveBtn.textContent = "Edit"
            editSaveBtn.setAttribute("class","edit-btn")
        }else if (editSaveBtn.textContent.toLowerCase() == "edit"){
            elements[0].readOnly = false
            editSaveBtn.textContent = "Save"
            editSaveBtn.setAttribute("class","save-btn")
        }
    })
}