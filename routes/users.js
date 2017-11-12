var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/:id", function (req, res, next) {
    const result = {
        name: ["firstName", "lastName"]
    };

    res.send(result);
});

module.exports = router;
