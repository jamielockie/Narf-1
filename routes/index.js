const express = require ('express');
const Narf = requre('../models/narf');

const router = express.Router();

router.route('/narfs')
	.get((req,res) => {
		Narf.find({}, (err,docs) => {
			if(err !== null) {
					res 
						.status(400)
						.send({
							error: err
						});
					return;
				}
				res
						.status(200)
						.send(docs);
		});
	})
	.post((req,res) => {});
