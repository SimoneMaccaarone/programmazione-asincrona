// DataService.getTodos(console.log)

// uso 2 callback che sono i .then
DataService.getTodos()      
.then(data => {return Todolist.fromObjectArray('Lista FIGAAA', data)}) // data=> ( dati che arrivano al server)
.then(todoList =>{
    console.log(todoList)
    addButtonsListeners(todoList);
    displayTodos(todoList);
    }); // todo list creata nel then precedente


// function transformData(data) {

//     const newTodoList = new Todolist('Lista Base');
//     for (let i = 0; i < data.length; i++) {
//         const todoObject = data[i];
//         const newTodo = new Todo(todoObject.title, todoObject.creationDate, todoObject.isCompleted, todoObject.id)
//         newTodoList.addTodo(newTodo);
//     }
//     console.log(newTodoList)
// }


function displayTodos(todoList) {
    const todoListTitle = document.getElementById('list-name');
    const todoListUl = document.getElementById('todo-list');


    const titleNode = document.createTextNode(todoList.title);
    todoListTitle.innerHTML=''; // pulisci tutto quello che ce dentro a list title
    todoListTitle.appendChild(titleNode);

    todoListUl.innerHTML = '';

    for (let i = 0; i < todoList.todoArray.length; i++) {
        const todo = todoList.todoArray[i];

        const newLi = document.createElement('li');
        newLi.classList.add('todo-li');

        //aggiunta del tasto rimuovi todo
        const removeButton = document.createElement('button')
        const buttonText = document.createTextNode('Rimuovi')
        removeButton.classList.add('remove-btn')

        removeButton.appendChild(buttonText)

        removeButton.addEventListener('click', (event) => todoList.removeTodo(todo));


        const titleSpan= document.createElement('span');
        titleSpan.classList.add('todo-title')

        const dateSpan= document.createElement('span');
        dateSpan.classList.add('todo-date');

        const titleNode = document.createTextNode(todo.title);
        const dateNode= document.createTextNode(todo.creationDate);


        // const addTodoButton = document.createElement('button')
        // const addTodoButtonText = document.createTextNode('AGGIUNGI TODO')

        titleSpan.appendChild(titleNode);
        dateSpan.appendChild(dateNode);

        

        newLi.appendChild(titleSpan);
        newLi.appendChild(dateSpan);
        newLi.appendChild(removeButton)
    
        todoListUl.appendChild(newLi);

    }
}
    
// function orderByTitle(todoArray){
//     return todoList.sortByTitle();
// }

function orderByTitle(todoList){
    todoList.sortByTitle();
    displayTodos(todoList);
}

function orderByDate(todoList){
    todoList.sortByCreationDate();
    displayTodos(todoList);
}

function addButtonsListeners(todoList){
    const orderTitleBtn = document.getElementById('order-title-btn');
    orderTitleBtn.addEventListener('click', (event) => orderByTitle(todoList))

    const orderDateBtn = document.getElementById('order-date-btn');
    orderDateBtn.addEventListener('click', (event) => orderByDate(todoList))

}