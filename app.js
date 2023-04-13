let superList = new Todolist('lista Super Figa');  //variabile golobale

displayTodos();

DataService.getTodos().then(data => {
    fillTodoArrayFromServer(data);
    displayTodos();
})

function fillTodoArrayFromServer(data) {
    for (let i = 0; i < data.length; i++) {
        const object = data[i];

        const todo = new Todo(object.title, object.creationDate, object.isCompleted, object.id);
        superList.addTodo(todo);
    }
}

//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

function displayTodos() { //è globale quindi la vede

    console.log(superList)
    const todoListTitle = document.getElementById('list-name');
    const todoListUl = document.getElementById('todo-list');


    const titleNode = document.createTextNode(superList.title);
    todoListTitle.innerHTML = ''; // pulisci tutto quello che ce dentro a list title
    todoListTitle.appendChild(titleNode);


    todoListUl.innerHTML = '';

    for (let i = 0; i < superList.todoArray.length; i++) {
        const todo = superList.todoArray[i];

        const newLi = document.createElement('li');
        newLi.classList.add('todo-li');

        if(todo.isCompleted){
            newLi.style.backgroundColor = 'chartreuse';
        }


        const titleSpan = document.createElement('span');
        titleSpan.classList.add('todo-title')

        const dateSpan = document.createElement('span');
        dateSpan.classList.add('todo-date');

        const titleNode = document.createTextNode(todo.title);
        const dateNode = document.createTextNode(todo.creationDate);

        //------------- COMPLETE -------------
        const completeButton = document.createElement('button');
        const textCompleteButton = document.createTextNode('Completato');
        completeButton.classList.add('complete-btn');

        completeButton.appendChild(textCompleteButton);

        completeButton.addEventListener('click', (event) => {
            superList.completeTodo(todo);
            displayTodos();
        })

        //-------------- REMOVE --------------
        //aggiunta del tasto rimuovi todo
        const removeButton = document.createElement('button');
        const textRemoveButton = document.createTextNode('Rimuovi');
        removeButton.classList.add('remove-btn');

        removeButton.appendChild(textRemoveButton);

        removeButton.addEventListener('click', (event) => {
            superList.removeTodo(todo)
            displayTodos();
        });

        //------------------------------------

        titleSpan.appendChild(titleNode);
        dateSpan.appendChild(dateNode);

        newLi.appendChild(titleSpan);
        newLi.appendChild(dateSpan);

        newLi.appendChild(completeButton)
        newLi.appendChild(removeButton)

        todoListUl.appendChild(newLi);
    }
}
// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//  COMPITIiiiiii
function displayTodos2(){
    //template literal
}
function displayTodos3(){
    
}
// creare ache una funzione per i tasti e altro
// dividire la funzione grande in piccole funzioni
// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

//  FUNZIONI x BOTTONI 
function orderByTitle() {
    superList.sortByTitle();
    displayTodos();
}

function orderByCreationDate() {
    superList.sortByCreationDate();
    displayTodos();
}