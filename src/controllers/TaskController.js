const database = require("../database/connection")

class TaskController {
    newTaks(request, response) {

        const {description, email, owner, status} = request.body

        console.log(description, email, owner, status);

        database.insert(description, email, owner, status).table("tasks").then(data=>{
            console.log(data);
            response.json({message:"Task criada com sucessp !"});
        }).catch(error => {
            console.log(error);
        })

    }
}