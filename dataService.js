

class DataService {

    // static getTodos(callback) {
    //     fetch('https://6436c1b18205915d34fc1963.mockapi.io/todo')
    //         .then(resp => resp.json())
    //         .then(data => callback(data))
    // }

    static getTodos() {
        return fetch('https://6436c1b18205915d34fc1963.mockapi.io/todo')    // GET (default)
            .then(resp => resp.json());
    }


    // static postTodo(todo){

    // }

    static putTodo(todo) {
        console.log('sono nella put',todo)
        const jsonTodo = JSON.stringify(todo.toDbModel());
        return fetch('https://6436c1b18205915d34fc1963.mockapi.io/todo/' + todo.id, { method: "PUT", body: jsonTodo, headers: { 'content-type': 'application/json' } })
            .then(resp => resp.json());
    }

    static deleteTodo(todo) {
        return fetch('https://6436c1b18205915d34fc1963.mockapi.io/todo/' + todo.id, { method: "DELETE" }) // aggiunta del metodo DELETE | fetch(url,{method})
            .then(resp => resp.json());
    }


}