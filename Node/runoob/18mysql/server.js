var connection = require('./conn');
connection.connect();


第一次查询
connection.query('SELECT 1+1 AS solution', function (error, results, fields) {
    if (error) {
        throw error;
    }
    console.log('The solution is: ', results[0].solution);
});




