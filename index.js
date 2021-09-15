<<<<<<< HEAD
var Express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var mysql = require("mysql");
var fileUpload = require('express-fileupload');
var fs = require('fs');

var app = Express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(fileUpload());
app.use('/Photos', Express.static(__dirname + '/Photos'));

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mytestdb'
})

app.listen(1234, () => {
    connection.connect(function (err) {
        if (err) throw err;
        console.log('Connected to DB');
    });
});

app.get('/', (request, response) => {
    response.send("Hello world!");
})

//Department
app.get('/api/department', (req, res) => {
    var query = `SELECT * from Department`;
    connection.query(query, function (err, rows, fields) {
        if (err) {
            res.send('Failed');
        }
        res.send(rows);
    })
})

app.post('/api/department', (req, res) => {
    var query = `INSERT into Department (DepartmentName) VALUE (?)`;
    var values = [
        req.body['DepartmentName']
    ];

    connection.query(query, values, function (err, rows, fields) {
        if (err) {
            res.send('Failed');
        }
        res.json('Added Successfully');
    })
})

app.put('/api/department', (req, res) => {
    var query = `UPDATE Department set DepartmentName=? where DepartmentId=?`;
    var values = [
        req.body['DepartmentName'],
        req.body['DepartmentId']
    ];

    connection.query(query, values, function (err, rows, fields) {
        if (err) {
            res.send('Failed');
        }
        res.json('Update Successfully');
    })
})

app.delete('/api/department/:id', (req, res) => {
    var query = `DELETE from Department where DepartmentId=?`;
    var values = [
        parseInt(req.params.id)
    ];

    connection.query(query, values, function (err, rows, fields) {
        if (err) {
            res.send('Failed');
        }
        res.json('Deleted Successfully');
    })
})

//Employee
app.get('/api/employee', (req, res) => {
    var query = `SELECT * from Employee`;
    connection.query(query, function (err, rows, fields) {
        if (err) {
            res.send('Failed');
        }
        res.send(rows);
    })
})

app.post('/api/employee', (req, res) => {
    var query = `INSERT into Employee (EmployeeName, Department, DateOfJoining, PhotoFileName) VALUE (?,?,?,?)`;
    var values = [
        req.body['EmployeeName'],
        req.body['Department'],
        req.body['DateOfJoining'],
        req.body['PhotoFileName']
    ];

    connection.query(query, values, function (err, rows, fields) {
        if (err) {
            res.send('Failed');
        }
        res.json('Added Successfully');
    })
})

app.put('/api/employee', (req, res) => {
    var query = `UPDATE Employee set EmployeeName=?, 
    Department=?, DateOfJoining=?, PhotoFileName=? where EmployeeId=?`;
    var values = [
        req.body['EmployeeName'],
        req.body['Department'],
        req.body['DateOfJoining'],
        req.body['PhotoFileName'],
        req.body['EmployeeId']
    ];

    connection.query(query, values, function (err, rows, fields) {
        if (err) {
            res.send('Failed');
        }
        res.json('Update Successfully');
    })
})

app.delete('/api/employee/:id', (req, res) => {
    var query = `DELETE from Employee where EmployeeId=?`;
    var values = [
        parseInt(req.params.id)
    ];

    connection.query(query, values, function (err, rows, fields) {
        if (err) {
            res.send('Failed');
        }
        res.json('Deleted Successfully');
    })
})

app.post('/api/employee/savefile', (req, res) => {
    fs.writeFile("./Photos/" + req.files.file.name, req.files.file.data, function (err) {
        if (err) {
            return
        }

        res.json(req.files.file.name);
    })
=======
var Express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var mysql = require("mysql");
var fileUpload = require('express-fileupload');
var fs = require('fs');

var app = Express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(fileUpload());
app.use('/Photos', Express.static(__dirname + '/Photos'));

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mytestdb'
})

app.listen(1234, () => {
    connection.connect(function (err) {
        if (err) throw err;
        console.log('Connected to DB');
    });
});

app.get('/', (request, response) => {
    response.send("Hello world!");
})

//Department
app.get('/api/department', (req, res) => {
    var query = `SELECT * from Department`;
    connection.query(query, function (err, rows, fields) {
        if (err) {
            res.send('Failed');
        }
        res.send(rows);
    })
})

app.post('/api/department', (req, res) => {
    var query = `INSERT into Department (DepartmentName) VALUE (?)`;
    var values = [
        req.body['DepartmentName']
    ];

    connection.query(query, values, function (err, rows, fields) {
        if (err) {
            res.send('Failed');
        }
        res.json('Added Successfully');
    })
})

app.put('/api/department', (req, res) => {
    var query = `UPDATE Department set DepartmentName=? where DepartmentId=?`;
    var values = [
        req.body['DepartmentName'],
        req.body['DepartmentId']
    ];

    connection.query(query, values, function (err, rows, fields) {
        if (err) {
            res.send('Failed');
        }
        res.json('Update Successfully');
    })
})

app.delete('/api/department/:id', (req, res) => {
    var query = `DELETE from Department where DepartmentId=?`;
    var values = [
        parseInt(req.params.id)
    ];

    connection.query(query, values, function (err, rows, fields) {
        if (err) {
            res.send('Failed');
        }
        res.json('Deleted Successfully');
    })
})

//Employee
app.get('/api/employee', (req, res) => {
    var query = `SELECT * from Employee`;
    connection.query(query, function (err, rows, fields) {
        if (err) {
            res.send('Failed');
        }
        res.send(rows);
    })
})

app.post('/api/employee', (req, res) => {
    var query = `INSERT into Employee (EmployeeName, Department, DateOfJoining, PhotoFileName) VALUE (?,?,?,?)`;
    var values = [
        req.body['EmployeeName'],
        req.body['Department'],
        req.body['DateOfJoining'],
        req.body['PhotoFileName']
    ];

    connection.query(query, values, function (err, rows, fields) {
        if (err) {
            res.send('Failed');
        }
        res.json('Added Successfully');
    })
})

app.put('/api/employee', (req, res) => {
    var query = `UPDATE Employee set EmployeeName=?, 
    Department=?, DateOfJoining=?, PhotoFileName=? where EmployeeId=?`;
    var values = [
        req.body['EmployeeName'],
        req.body['Department'],
        req.body['DateOfJoining'],
        req.body['PhotoFileName'],
        req.body['EmployeeId']
    ];

    connection.query(query, values, function (err, rows, fields) {
        if (err) {
            res.send('Failed');
        }
        res.json('Update Successfully');
    })
})

app.delete('/api/employee/:id', (req, res) => {
    var query = `DELETE from Employee where EmployeeId=?`;
    var values = [
        parseInt(req.params.id)
    ];

    connection.query(query, values, function (err, rows, fields) {
        if (err) {
            res.send('Failed');
        }
        res.json('Deleted Successfully');
    })
})

app.post('/api/employee/savefile', (req, res) => {
    fs.writeFile("./Photos/" + req.files.file.name, req.files.file.data, function (err) {
        if (err) {
            return
        }

        res.json(req.files.file.name);
    })
>>>>>>> 098a8e3ffb121b581dfc9f078cd208322a1273ad
})