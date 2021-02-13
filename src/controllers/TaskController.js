const database = require("../database/connection");

class TaskController {
    newTask(request, response) {

        const {description, email, owner, status} = request.body;

        (description, email, owner, status);

        database.insert({description, email, owner, status}).table("tasks").then(data=>{
            (data);
            response.json({message:"Task successfully created!"});
        }).catch(error => {
            (error);
        })

    }

    updateTask(request, response){
        const id = request.params.id;
        const {description, email, owner, status, restartedTimes} = request.body;
        const values = 
            {
                description: description, 
                email: email, 
                owner: owner, 
                status: status, 
                restartedTimes: restartedTimes
            }

        database.table("tasks").where({id:id}).update(values).then(task=>{
            response.json({message:"Task successfully updated!"});
        }).catch(error=>{
            (error);
        })
    }
    
    listTasks(request, response){
        database.select("*").table("tasks").then(tasks=>{
            (tasks);
            response.json(tasks);
        }).catch(error=>{
            (error);
        })
    }

    listTaskById(request, response){
        const id = request.params.id;
        ('id', id);
        database.select("*").table("tasks").where({id:id}).then(task=>{
            task = task && task.length ? task.reduce(item => item) : {}
            response.json(task);
        }).catch(error=>{
            (error);
        })
    }

}

module.exports = new TaskController();