const express = require("express");
const router = express.Router();

const {
  getFrasesF,
  getFraseF,
  deleteFraseF,
  createFraseF,
} = require("../controllers/frasefinal");

router.get("/frasesfinal", getFrasesF);
router.get("/frasesfinal/:id", getFraseF);
router.post("/frasesfinal", createFraseF);
router.delete("/frasesfinal/:id", deleteFraseF);

module.exports = router;
