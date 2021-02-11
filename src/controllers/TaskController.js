const database = require("../database/connection");

class TaskController {
    newTask(request, response) {

        const {description, email, owner, status} = request.body

        console.log(description, email, owner, status);

        database.insert({description, email, owner, status}).table("tasks").then(data=>{
            console.log(data);
            response.json({message:"Task criada com sucessp !"});
        }).catch(error => {
            console.log(error);
        })

    }

    listTasks(request, response){
        database.select("*").table("tasks").then(tasks=>{
            console.log(tasks);
            response.json(tasks);
        }).catch(error=>{
            console.log(error);
        })
    }

    listTaskById(request, response){
        const id = request.params.id;
        console.log('id', id);
        database.select("*").table("tasks").where({id:id}).then(task=>{
            task = task && task.length ? task.reduce(item => item) : {}
            response.json(task);
        }).catch(error=>{
            console.log(error);
        })
    }
}

module.exports = new TaskController();