
const sql = require("../db.js");



const getPersons =async function() {
    let query = "SELECT * FROM newPerson1";
    let data= await sql(query);
    console.log( data )
    return data
}



const createPerson =async function() {
    let query = "INSERT INTO newPerson1 VALUES ( 102, 'PKR', 62)";
    let data= await sql(query);
    console.log( data )
    return data
}



module.exports.getPersons = getPersons
module.exports.createPerson = createPerson


