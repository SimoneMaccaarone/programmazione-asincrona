class DataService {

    // static getTodos(callback) {
    //     fetch('https://6436c1b18205915d34fc1963.mockapi.io/todo')
    //         .then(resp => resp.json())
    //         .then(data => callback(data))
    // }

    static getTodos() {
        return fetch('https://6436c1b18205915d34fc1963.mockapi.io/todo')
            .then(resp => resp.json())
    }


    // static postTodo(todo){

    // }

    // static putTodo(todo){

    // }

    // static deleteTodo(todo){

    // }


}