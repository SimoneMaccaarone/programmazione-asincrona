class Todolist {

    constructor(title, todoArray = []) {
        this.title = title;
        this.todoArray = todoArray;
    }

    addTodo(todo) {
        this.todoArray.push(todo);
    }



    sortByTitle() {
        return this.todoArray.sort((todo1, todo2) => todo1.compareByTitle(todo2))
    }

    sortByCreationDate() {
        return this.todoArray.sort((todo1, todo2) => todo1.compareByCreationDate(todo2))
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

    //  --------- BOTTONI----------
    completeTodo(todo) {
        todo.isCompleted = true;
        // displayTodosWithAlt96();
    }
    // notCompleteTodo(todo) {
    //     todo.isCompleted = false;
    //     // displayTodosWithAlt96();   
    // }

    removeTodo(todo) {
        //  SPLICE
        const todoIndex = this.todoArray.indexOf(todo);
        this.todoArray.splice(todoIndex, 1);
        // displayTodosWithAlt96();
        //  FILTER
        // this.todoArray = this.todoArray.filter((element)=> element !== todo);
    }

}