const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'dvdrental',
  password: 'myPassword',
  port: 5432,
})


console.log("here");
const getUsers = (request, response) => {
    pool.query('SELECT * FROM actor', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  console.log(getUsers());



  module.exports = {
    getUsers,
    // getUserById,
    // createUser,
    // updateUser,
    // deleteUser,
  }