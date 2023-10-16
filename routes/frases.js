const express = require("express");
const router = express.Router();
const { getFrases, getFrase } = require("../controllers/frases");

router.get("/frases1", getFrases);
router.get("/frases1/:id", getFrase);

module.exports = router;
