const express = require("express");
const router = express.Router();
var numbersController = require("../controller/numbersController")


router.get("/add", numbersController.add);
router.post("/add", numbersController.result);


module.exports = router;