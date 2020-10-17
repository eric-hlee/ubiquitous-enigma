var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

router.get('/', (req, res, next) => {
	client.connect((err) => {
		if (err) throw err;

		const collection = client.db('eric').collection('workExperience');

		collection.find().toArray((err, result) => {
			if (err) throw err;
			res.send(result);
		});

		// client.close();
	});
});

module.exports = router;
