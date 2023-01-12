const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
	host: "localhost",
	user: "root",
	password: "password",
	database: "dummyDB"
})

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
	res.send("hello world");
});

app.post("/api/poke", (req, res) => {
	const foo = req.body.foo;
	const sqlInsert = 'INSERT INTO dummyTable (foo) VALUES (?) ='
	db.query(sqlInsert, [foo], (err, result) => {
		console.log(result);
	});
});

app.listen(3001, () => {
	console.log("running on port 3001");
});
