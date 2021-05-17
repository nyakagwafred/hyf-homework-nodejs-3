const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');

app.get('/', (req, res) => {
	res.json({
		message: 'Hello Buda!',
	});
});

app.listen(PORT, () => {
	console.log(`Server running on PORT ${PORT}`);
});
