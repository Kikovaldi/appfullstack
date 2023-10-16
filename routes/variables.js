const express = require("express");
const router = express.Router();
const {
  getFrasesV,
  getFraseV,
  createFraseV,
} = require("../controllers/variables");

router.get("/variables", getFrasesV);
router.get("/variables:id", getFraseV);
router.post("/variables", createFraseV);

module.exports = router;
