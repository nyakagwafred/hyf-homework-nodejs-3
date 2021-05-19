const { json } = require('express');
const express = require('express');
const app = express();
const PORT = 3000;

let users = [];

app.use(express.json());
app.get('/', (req, res) => {
	res.send('Hello World!');
});

//Get all users
app.get('/users', (req, res) => {
	res.send(users);
});

//Get a user with specified Id
app.get('/users/:id', async (req, res) => {
	const { id } = req.params;
	const user = await users.find((id) => id === id);
	try {
		if (user) {
			res.status(200);
			res.send(user);
		} else {
			res.json({ msg: 'User not found' });
		}
	} catch (err) {
		res.send(err);
		console.log(err);
	}
});

//Creat users route
app.post('/users', (req, res) => {
	const { id } = req.body;
	try {
		if (id) {
			users.push({ id });
			res.send({ msg: 'User created' });
		} else {
			res.json({ msg: 'Invalid Input' });
		}
	} catch (err) {
		res.json(err);
	}
});

app.listen(PORT, () => {
	console.log(`Server running on PORT ${PORT}`);
});
