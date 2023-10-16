const variablesCuento = require("../models/variables");

const getFrasesV = (req, res) => {
  variablesCuento
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

const getFraseV = (req, res) => {
  const id = req.params.id;
  variablesCuento
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

const createFraseV = (req, res) => {
  const { verbo, nombre, lugar, adjetivo, nombrefamoso, nombre2} = req.body;
  const variable = new variablesCuento(
    verbo,
    nombre,
    lugar,
    adjetivo,
    nombrefamoso,
    nombre2
  );
  variable
    .create()
    .then((data) => res.status(201).send({ data: variable }))
    .catch((err) => {
      res.status(500);
      console.log(err);
    });
};

module.exports = { getFrasesV, getFraseV, createFraseV };
