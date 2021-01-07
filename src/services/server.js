const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/login', (req, res) => {
	console.log(req.body);
	res.send({
		id: 1,
		name: 'Navin',
		username: req.body.username,
		token: Date.now() / 1000 | 0
	});
});

app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));