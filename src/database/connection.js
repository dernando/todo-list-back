var knex = require('knex')({
    client: 'mysql',
    connection: {
        host : 'localhost',
        user : 'root',
        password : 'root',
        database : 'todo'
     }
});
module.exports = knex