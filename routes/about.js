var express = require("express");
var router = express.Router();
var MongoClient = require("mongodb").MongoClient;

const uri =
	"mongodb+srv://ericlee:lcPBtSuBrg4k3M5b@cluster0-xandl.gcp.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

router.get("/", (req, res, next) => {
	client.connect((err) => {
		if (err) throw err;

		const collection = client.db("eric").collection("workExperience");

		collection.find().toArray((err, result) => {
			if (err) throw err;
			res.send(result);
		});
		client.close();
	});
});

module.exports = router;
