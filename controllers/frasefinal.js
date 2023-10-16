const frasesFinales = require("../models/frasefinal");

const getFrasesF = (req, res) => {
  frasesFinales
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

const getFraseF = (req, res) => {
  const id = req.params.id;
  frasesFinales
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

const createFraseF = (req, res) => {
  const { autor, frase } = req.body;
  const fraseFinal = new frasesFinales(autor, frase);
  fraseFinal
    .create()
    .then((data) => res.status(201).send({ data: fraseFinal }))
    .catch((err) => {
      res.status(500);
      console.log(err);
    });
};

const deleteFraseF = (req, res) => {
  const id = req.params.id;
  frasesFinales
    .delete(id)
    .then(() => {
      res.status(200).send({ msg: "product deleted" });
    })
    .catch((err) => {
      res.status(500);
      console.log(err);
    });
};

module.exports = { getFrasesF, getFraseF, deleteFraseF, createFraseF };
