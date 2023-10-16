const plantillaFrases = require("../models/frases");

const getFrases = (req, res) => {
  plantillaFrases
    .getAll()
    .then((data) => {
      if (data[0].length) {
        res.status(200).send({ data: data[0] });
      } else {
        res.status(200).send({ msg: "this page is empty" });
      }
    })
    .catch((err) => {
      res.status(500);
      console.log(err);
    });
};

const getFrase = (req, res) => {
  const id = req.params.id;
  plantillaFrases
    .getById(id)
    .then((data) => {
      if (data[0].length) {
        res.status(200).send({ data: data[0] });
      } else {
        res.status(404).send({ msg: "product not found" });
      }
    })
    .catch((err) => {
      res.status(500);
      console.log(err);
    });
};

module.exports = { getFrases, getFrase };
