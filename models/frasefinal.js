const db = require("../config/database")

module.exports = class frasesFinales {
    constructor(autor, frase){
        this.autor = autor,
        this.frase = frase
     
    }

    static getAll(){
        return db.execute("SELECT * FROM frasesfinales")
    }
    
    static getById(id){
        return db.execute(`SELECT * FROM frasesfinales WHERE frasesfinales.id = ${id}`)
    }
    create(){
       
        return db.execute(`INSERT INTO frasesfinales (autor, frase) VALUES ('${this.autor}','${this.frase}')`) 

    }

    static delete(id){
        return db.execute(`DELETE FROM frasesfinales WHERE frasesfinales.id = ${id}`)
    }

}
