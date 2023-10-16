const db = require("../config/database");

module.exports = class variablescuento {
  constructor(verbo, nombre, lugar, adjetivo, nombrefamoso, nombre2) {
    (this.verbo = verbo),
      (this.nombre = nombre),
      (this.lugar = lugar),
      (this.adjetivo = adjetivo),
      (this.nombrefamoso = nombrefamoso),
      (this.nombre2 = nombre2);
  }

  static getAll() {
    return db.execute("SELECT * FROM variablescuento");
  }

  static getById(id) {
    return db.execute(`SELECT * FROM variablescuento WHERE variablescuento.id = ${id}`);
  }
  create() {
    return db.execute(
      `INSERT INTO variablescuento (verbo, nombre, lugar, adjetivo, nombrefamoso, nombre2) VALUES ('${this.verbo}','${this.nombre}','${this.lugar}','${this.adjetivo}','${this.nombrefamoso},'${this.nombre2}'')`
    );
  }
};
