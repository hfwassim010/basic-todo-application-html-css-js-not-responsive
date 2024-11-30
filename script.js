var taskId = 1
var tasks = []

function add(){
    let task = document.getElementById("task").value
    let tasksList = document.querySelector(".tasks-list")
    let taskRef = `t-${taskId}`
    let newTask = {
        id:taskRef,
        name:task,
    }
    tasks.push(newTask)
    console.log(tasks)
    tasksList.innerHTML = ""
    tasks.map((task) => {
        content = 
        `
        <div id="${task.id}" class="task-box">
            <textarea readonly>${task.name}</textarea>
            <div class="btn">
                <button class="del-btn" onclick="deleteTask('${task.id}')">Delete</button>
                <button class="edit-btn" onclick="edit('${task.id}')">Edit</button>
            </div>
        </div>
        
        `
        tasksList.innerHTML += content
    })

    taskId++
}


function deleteTask(id) {
    let element = document.getElementById(id)
    element.remove()

    tasks.filter((task) => {
        if (task.id != id){
            return task
        }
    })
}

function clearTasks(){
    let tasksList = document.querySelector(".tasks-list")
    tasksList.innerHTML = ""
    tasks=[]
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
            updatedTask = elements[0].value
            alert(updatedTask)
            elements[0].value = updatedTask
            elements[0].readOnly = true
            editSaveBtn.textContent = "Edit"
            editSaveBtn.setAttribute("class","edit-btn")

            tasks.filter((task)=>{
                if (task.id == id){
                    task.name = updatedTask
                }
                return task
            })

        }else if (editSaveBtn.textContent.toLowerCase() == "edit"){
            elements[0].readOnly = false
            editSaveBtn.textContent = "Save"
            editSaveBtn.setAttribute("class","save-btn")
        }
    })
}