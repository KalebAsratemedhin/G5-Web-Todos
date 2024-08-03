const addButton = document.querySelector("button")
const todoInput = document.querySelector("input")
const todoBox = document.querySelector(".my-todos")


let todos = []

addButton.onclick = () => addTodo(todoInput.value)


function addTodo(todo){
    if(todo){
        todos.push(todo)
        todoInput.value = ""
    }
    todoBox.innerHTML = ""
    showTodos()

}


function editTodo(index, itemList, itemEdit, saveButton, editButton){
    // hide the edit button and the list element instead show input field and save button
    itemList.style = "display: none;"
    itemEdit.style = "display: inline"
    saveButton.style = "display: inline"
    editButton.style = "display: none"

}

function updateTodo(index, itemList, itemEdit, saveButton, editButton){
    itemList.textContent = itemEdit.value

    itemList.style = "display: inline;"
    itemEdit.style = "display: none"
    saveButton.style = "display: none"
    editButton.style = "display: inline"

    // update todo in array
    todos[index] = itemEdit.value

    
}

function deleteTodo(todoIndex, item){
    todos = todos.filter((value, index) => index != todoIndex )
    todoBox.removeChild(item)

}

function showTodos(){

    todos.forEach((todo, index) => {
        const item = document.createElement("div")
        const buttons = document.createElement("div")
        const deleteButton = document.createElement("button")
        const editButton = document.createElement("button")
        const saveButton = document.createElement("button")
    
        const itemList = document.createElement("li")
        itemList.textContent = todo
    
        const itemEdit = document.createElement("input")
        itemEdit.value = todo 
    
        itemList.style = "list-style: none; display: inline;"
        itemEdit.style = "display: none;"
        
        item.appendChild(itemList)
        item.appendChild(itemEdit)
        item.style = " border-radius: 3px; padding: 10px; height: 50px; width: 50%; box-shadow: 1px 1px 1px 1px grey; display: flex; justify-content: space-between; align-items: center; margin-bottom: 7px;"
       
    
    
        deleteButton.textContent = "delete"
        editButton.textContent = "edit"
        saveButton.textContent = "save"

    
        buttons.style = "min-width: 100px; display: flex; justify-content: space-between;"
        saveButton.style = "display: none;"

        editButton.onclick = () => editTodo(index, itemList, itemEdit, saveButton, editButton)
        deleteButton.onclick = () => deleteTodo(index, item) 
        saveButton.onclick = () => updateTodo(index, itemList, itemEdit, saveButton, editButton)

        buttons.appendChild(deleteButton)
        buttons.appendChild(editButton)
        buttons.appendChild(saveButton)
    
        item.appendChild(buttons)
    
        todoBox.appendChild( item)
    
        
    });

}
