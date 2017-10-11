
const express = require('express');
const Narf = require('./models/narf.js');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/narf');


app.use(express.static('public'));

router.route('/').get((req,res) => {
	res.json({
		message:'narf narf bitch'
	});
});

app.use('/api', router);
app.listen(4800);