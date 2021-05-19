const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');

let users = [];

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.get('/users', (req, res) => {
	res.send(users);
});

app.listen(PORT, () => {
	console.log(`Server running on PORT ${PORT}`);
});
