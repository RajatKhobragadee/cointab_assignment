const axios = require('axios')
var mysql = require('mysql');


var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root123',
    database: 'cointab'
});


exports.getData = async function (req, res) {


    const result = await axios.get("https://randomuser.me/api/?results=100", {
        headers: { "Accept-Encoding": "gzip,deflate,compress" }
    });
        
    let data = result.data

    res.status(200).send({ msg: data, status: true })
    for (let i = 0; i < data.results.length; i++) {
        //console.log(data.results[i])
        console.log("Connected!");
        var sql = "INSERT INTO person (gender,first,last,city,country,email,phone,picture) VALUES ?";
        console.log(data.results[i].phone)
        var values = [[data.results[i].gender, data.results[i].name.first,
        data.results[i].name.last, data.results[i].location.city,
        data.results[i].location.country, data.results[i].email, data.results[i].phone, data.results[i].picture.medium]];

        console.log(values)
        connection.query(sql, [values], function (err, result) {
            if (err) throw err;
            console.log("Number of records inserted: " + result.affectedRows);
        });



    }







 
}




exports.deleteData = async function (req, res) {

    try {
        let query = "DELETE FROM person";
        connection.query(query, (err, rows) => {
            if (err) throw err;

            console.log('Number of rows deleted = ' + rows.affectedRows);
            res.status(200).send({ status: true, msg: "data succesfully deleted" })
            
        });
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}










exports.getAllUserData = async function (req, res) {

    // connection.connect(function(err) {
    // if (err) throw err;
    connection.query("SELECT * FROM person", function (err, result, fields) {
        //   if (err) throw err;
        console.log(result);
        res.send(result)
    });
    //   });
}



