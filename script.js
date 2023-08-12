const newTodoInput = document.getElementById("newTodo");
const addButton = document.getElementById("addButton");
const todoList = document.getElementById("todoList");

addButton.addEventListener("click", () => {
    const todoText = newTodoInput.value.trim();
    
    if (todoText !== "") {
        const li = document.createElement("li");
        li.textContent = todoText;
        
        li.addEventListener("click", () => {
            li.classList.add("done");
            setTimeout(() => {
                todoList.removeChild(li);
            }, 1000);
        });
        
        todoList.appendChild(li);
        newTodoInput.value = "";
    }
});
