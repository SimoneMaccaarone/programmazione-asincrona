class Todo {

    constructor(title, creationDate, isCompleted = false, id) {
        this.title = title;
        this._creationDate = creationDate;
        this.isCompleted = isCompleted;
        if (id) {
            this.id = id;
        }
    }

    get creationDate() {
        const millSec = this._creationDate * 1000;      // da Secondi a Millisecondi (perche lo vuole JavaScript)
        const date = new Date(millSec);    // mettere dentro a new Date la creationDate
        return date;
    }

    set creationDate(newDate) {
        const millSec = newDate.getTime();
        const sec = millSec / 1000;  // da Milli secondi a Secondi
        this._creationDate = sec;

    }

    compareByTitle(todo2) {
        return this.title.localeCompare(todo2.title);
    }

    compareByCreationDate(todo2) {
        if (this._creationDate > todo2._creationDate) {
            return -1;
        } else if (this._creationDate < todo2._creationDate) {
            return 1;
        } else {
            return 0
        }
    }

    static fromTodoObject(todoObject) {
        return new Todo(todoObject.title, todoObject.creationDate, todoObject.isCompleted, todoObject.id);
    }

    toDbModel(){
        const dbModel= {
            title: this.title,
            creationDate: this._creationDate,
            isCompleted: this.isCompleted,
            id:this.id
        }
        return dbModel;
    }


}