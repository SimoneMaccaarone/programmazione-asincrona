let superList = new Todolist('lista Super Figa');  //variabile golobale

displayTodos(); // display => la funzione che mostra tutto
// displayTodos()       // il display abbreviato con funzioni
//displayTodosOld()    //  il display "vecchio" 

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
}//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬



function displayTodos() { //è globale quindi la vede
    console.log(superList);

    const todoListTitle = document.getElementById('list-name');
    const todoListUl = document.getElementById('todo-list');


    const titleNode = document.createTextNode(superList.title);
    todoListTitle.innerHTML = ''; // pulisci tutto quello che ce dentro a list title
    todoListTitle.appendChild(titleNode);


    todoListUl.innerHTML = '';

    for (let i = 0; i < superList.todoArray.length; i++) {
        const todo = superList.todoArray[i];

        // creazione dell' elenco
        const newLi = document.createElement('li');
        newLi.classList.add('todo-li');
        //condizione se il todo è completato o no
        if (todo.isCompleted) {
            newLi.style.backgroundColor = 'chartreuse';
        }else if(todo.isCompleted===true){
            newLi.style.backgroundColor = 'aqua';
        }

        //---------- TITLE & DATE ---------
        createdTitleOfTodo(todo);
        createdDateOfTodo(todo);

        //----------- COMPLETE & REMOVE -----------
        createCompleteButton(todo);
        createRemoveButton(todo);

        newLi.appendChild(createdTitleOfTodo(todo));       //newLi.appendChild(titleSpan); 
        newLi.appendChild(createdDateOfTodo(todo));       // newLi.appendChild(dateSpan);

        newLi.appendChild(createCompleteButton(todo));  // inserisco le funzioni dentro alla li (cioe i todo)
        newLi.appendChild(createRemoveButton(todo));

        todoListUl.appendChild(newLi);
    }
}// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

//-------------- FUNCTIONs TITLE & DATE --------------
function createdTitleOfTodo(todo) {

    const titleSpan = document.createElement('span');
    titleSpan.classList.add('todo-title');

    const titleNode = document.createTextNode(todo.title);
    titleSpan.appendChild(titleNode);

    return titleSpan;
}

function createdDateOfTodo(todo) {
    const dateSpan = document.createElement('span');
    dateSpan.classList.add('todo-date');

    const dateNode = document.createTextNode(todo.creationDate);
    dateSpan.appendChild(dateNode);

    return dateSpan;
}

//------------- FUNCTION COMPLETE -------------
function createCompleteButton(todo) {
    const completeButton = document.createElement('button');
    const textCompleteButton = document.createTextNode('Completato');
    completeButton.classList.add('complete-btn');
    completeButton.appendChild(textCompleteButton);
    
    completeButton.addEventListener('click', (event) => {
        superList.completeTodo(todo);
        DataService.putTodo(todo).then(updateTodo=>{
            displayTodos();
        })
    });
    // completeButton.addEventListener('click', (event) => {
    //     superList.notCompleteTodo(todo);
    //     DataService.putTodo(todo).then(updateTodo=>{
    //         displayTodos();
    //     })
    // });
    return completeButton;
}


//-------------- FUNCTION REMOVE --------------
function createRemoveButton(todo) {
    //aggiunta del tasto rimuovi todo
    const removeButton = document.createElement('button');
    const textRemoveButton = document.createTextNode('Rimuovi');
    removeButton.classList.add('remove-btn');
    removeButton.appendChild(textRemoveButton);

    removeButton.addEventListener('click', (event) => {
        DataService.deleteTodo(todo).then(removedTodo => { 
            superList.removeTodo(todo);
            displayTodos();
        });
    });
    return removeButton;
}// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ 


//  FUNZIONI x BOTTONI 
function orderByTitle() {
    superList.sortByTitle();
    displayTodos();
}

function orderByCreationDate() {
    superList.sortByCreationDate();
    displayTodos();
}


// DISPLAY CON STRINGA INTERPOLATA
// function displayTodosWithAlt96() {

//     const todoListTitle = document.getElementById('list-name');
//     todoListTitle.innerHTML = superList.title;

//     const todoListUl = document.getElementById('todo-list');

//     todoListUl.innerHTML = ``;
//     //  CREAZIONE HTML
//     for (let i = 0; i < superList.todoArray.length; i++) {
//         const todo = superList.todoArray[i];
//         todoListUl.innerHTML += `<li class="todo-li ${todo.isCompleted ? 'complete-btn': ''}">
//                                     <span class="todo-title"> ${todo.title} </span>
//                                     <span class="todo-date"> ${todo.creationDate}</span>
//                                     <button id="complete-btn${i}"> Completato</button>
//                                     <button id="remove-btn${i}"> Rimuovi </button>
//                                 </li>`
//     }
//     //  AZIONE DEI TASTI Complete E Remove
//     for (let i = 0; i < superList.todoArray.length; i++) {
//         const todo = superList.todoArray[i];

//         const completeButton = document.getElementById(`complete-btn${i}`);
//         const removeButton = document.getElementById(`remove-btn${i}`);

//         completeButton.addEventListener('click', (event) => {
//             superList.completeTodo(todo);
//             displayTodosWithAlt96();
//         });

//         removeButton.addEventListener('click', (event) => {
//             superList.removeTodo(todo)
//             displayTodosWithAlt96();
//         });
//     }
// }

// DISPLAY LUNGO "OLD"
// function displayTodosOld() { //è globale quindi la vede
//     console.log(superList)
//     const todoListTitle = document.getElementById('list-name');
//     const todoListUl = document.getElementById('todo-list');
//     const titleNode = document.createTextNode(superList.title);
//     todoListTitle.innerHTML = ''; // pulisci tutto quello che ce dentro a list title
//     todoListTitle.appendChild(titleNode);
//     todoListUl.innerHTML = '';
//     for (let i = 0; i < superList.todoArray.length; i++) {
//         const todo = superList.todoArray[i];
//         const newLi = document.createElement('li');
//         newLi.classList.add('todo-li');
//         if(todo.isCompleted){
//             newLi.style.backgroundColor = 'chartreuse';
//         }
//         const titleSpan = document.createElement('span');
//         titleSpan.classList.add('todo-title')
//         const dateSpan = document.createElement('span');
//         dateSpan.classList.add('todo-date');
//         const titleNode = document.createTextNode(todo.title);
//         const dateNode = document.createTextNode(todo.creationDate);
//         //------------- COMPLETE -------------
//         const completeButton = document.createElement('button');
//         const textCompleteButton = document.createTextNode('Completato');
//         completeButton.classList.add('complete-btn');
//         completeButton.appendChild(textCompleteButton);
//         completeButton.addEventListener('click', (event) => {
//             superList.completeTodo(todo);
//             displayTodos();
//         })
//         //-------------- REMOVE --------------
//         //aggiunta del tasto rimuovi todo
//         const removeButton = document.createElement('button');
//         const textRemoveButton = document.createTextNode('Rimuovi');
//         removeButton.classList.add('remove-btn');
//         removeButton.appendChild(textRemoveButton);
//         removeButton.addEventListener('click', (event) => {
//             superList.removeTodo(todo)
//             displayTodos();
//         });
//         //------------------------------------
//         titleSpan.appendChild(titleNode);
//         dateSpan.appendChild(dateNode);
//         newLi.appendChild(titleSpan);
//         newLi.appendChild(dateSpan);
//         newLi.appendChild(completeButton)
//         newLi.appendChild(removeButton)
//         todoListUl.appendChild(newLi);
//     }
// }