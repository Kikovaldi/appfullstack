
//get by id de la frase

//post de las variables  (1,2,3,4)

//post de las variables + frase completada + nombre 

// get all (variables con frase)

// delete para borrar

const db = require("../config/database")

module.exports = class plantillaFrases {
    constructor(part1, part2, part3){
        this.part1 = part1,
        this.part2 = part2,
        this.part3 = part3
    }
    

    static getAll(){
        return db.execute("SELECT * FROM plantillafrases")
    }
    
    static getById(id){
        return db.execute(`SELECT * FROM plantillafrases WHERE plantillafrases.id = ${id}`)
    }
    // create(){
    
    //     return db.execute(`INSERT INTO home (name, price, description, room) VALUES ('${this.name}','${this.price}','${this.description}','${this.room}')`)
    // }

    // static delete(id){
    //     return db.execute(`DELETE FROM home WHERE home.id = ${id}`)
    // }

}

