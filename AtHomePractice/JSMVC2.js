const todos = [
    {id: 1001, text: 'Eat pizza', done: false},
    {id: 2001, text: 'Walk the dog', done: false},
    {id: 3001, text: 'Go shopping', done: false},
];

const todoList = document.getElementById("todo-container");

function renderTodos(){
    todoList.innerHTML = "";

  

    todos.forEach(todo => {
        const li = document.createElement("li");
        li.classList.add("todo-item")

        if(todo.done)li.classList.add("completed")

        //creat checkbox
        const cb = document.createElement("input")
        cb.type = "checkbox"
        cb.checked = todo.done
        cb.addEventListener("change",() => toggleDone(todo.id))
        li.appendChild(cb)
        
        const span = document.createElement("span")
        span.textContent = todo.text

       // li.innerHTML = todo.text;
        li.appendChild(span)

        //add remove buttton
        const xmlns = "http://www.w3.org/2000/svg"
        const btn = document.createElementNS(xmlns, 'svg')
        btn.setAttribute('viewBox', '0 0 24 24')
        btn.classList.add('remove-button')
        
        const path = document.createElementNS(xmlns, "path")
        path.setAttribute(
            "d",
            "M9.75 9.7514.5 4.5m0-4.5l-4.5 4.5m21 12a9 9 0 0 11-18 0 9 9 0 0118 0z")
            
    btn.appendChild(path)    
        li.appendChild(btn)

        
        
        todoList.appendChild(li)



    })
}

renderTodos();