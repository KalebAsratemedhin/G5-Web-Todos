const addButton = document.querySelector("button")
const todoInput = document.querySelector("input")
const todoBox = document.querySelector(".my-todos")


let todos = []

addButton.onclick = () => {
    if(todoInput.value){
        todos.push(todoInput.value)
        showTodo(todoInput.value)

    }

}






const showTodo = (todo) => {
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
    item.style = "border: 1px solid black; border-radius: 3px; padding: 10px; height: 50px; width: 50%; box-shadow: 0.5px 1px 1px 0.5px; display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;"
   


    deleteButton.textContent = "delete"
    editButton.textContent = "edit"
    saveButton.textContent = "save"

    buttons.style = "min-width: 100px; display: flex; justify-content: space-between;"
    saveButton.style = "display: none;"

    deleteButton.onclick = () => {
        todos = todos.filter(tod => tod != todo )
        todoBox.removeChild(item)
    }

    editButton.onclick = () => {

        itemList.style = "display: none;"
        itemEdit.style = "display: inline"
        saveButton.style = "display: inline"
        editButton.style = "display: none"
        
    }

    saveButton.onclick = () => {

        itemList.textContent = itemEdit.value

        itemList.style = "display: inline;"
        itemEdit.style = "display: none"
        saveButton.style = "display: none"
        editButton.style = "display: inline"

        for (i = 0; i < todos.length; i++){
            if (todos[i] === todo){
                todos[i] = itemEdit.value
            }
        }


    }

    

    buttons.appendChild(deleteButton)
    buttons.appendChild(editButton)
    buttons.appendChild(saveButton)

    item.appendChild(buttons)



    todoBox.appendChild( item)
    


}