const database = require("../database/connection");
table="tasks";

class TaskController {

    newTask(request, response) {

        const {description, email, owner, status} = request.body;

        database.insert({description, email, owner, status}).table(table).then(data=>{
            (data);
            response.json({message:"Task successfully created!"});
        }).catch(error => {
            (error);
        })

    }

    newTasks(request, response) {

        const tasks = request.body.map(item => item);

        database.insert(tasks).table(table).then(data=>{
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

        database.table(table).where({id:id}).update(values).then(task=>{
            response.json({message:"Task successfully updated!"});
        }).catch(error=>{
            (error);
        })
    }
    
    listTasks(request, response){
        database.select("*").table(table).then(tasks=>{
            response.json(tasks);
        }).catch(error=>{
            (error);
        })
    }

    listTaskById(request, response){
        const id = request.params.id;

        database.select("*").table(this.table).where({id:id}).then(task=>{
            task = task && task.length ? task.reduce(item => item) : {}
            response.json(task);
        }).catch(error=>{
            (error);
        })
    }

}

module.exports = new TaskController();