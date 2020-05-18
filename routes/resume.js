var express = require("express");
var router = express.Router();

const fileName = "files/resume.pdf";

router.get("/", function (req, res, next) {
	res.download(fileName, function (err) {
		if (err) throw err;
		console.log("Sent:", fileName);
	});
});

module.exports = router;
