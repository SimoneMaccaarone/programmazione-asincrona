class Todolist{

    constructor(title, todoArray = []){
        this.title = title;
        this.todoArray = todoArray;
    }

    addTodo(todo){
        this.todoArray.push(todo);
    }

    removeTodo(todo){
        const todoIndex = this.todoArray.indexOf(todo);
        this.todoArray.splice(todoIndex,1);
        displayTodos(Todolist);
    }

    sortByTitle(){

    }

    sortByCreationDate(){

    }

    completeTodo(todo){

    }

    static fromObjectArray(title, objectArray) {
        const newTodoList = new Todolist(title);
        for (let i = 0; i < objectArray.length; i++) {
            const todoObject = objectArray[i];
            const newTodo = Todo.fromTodoObject(todoObject);
            newTodoList.addTodo(newTodo);
        }
        return newTodoList;
    }

}