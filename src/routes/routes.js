const express = require("express");
const controller = require("../controller/controller");
const router = express.Router();

router.get("/", controller.teste);

router.post("/verificar", controller.verifyWords);

module.exports = router;
