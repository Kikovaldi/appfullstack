require("dotenv").config()
const express = require("express")
const cors = require("cors")
const db= require("./config/database")

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static('./client'))
const port = process.env.PORT || 2018
app.listen(port, () => {
    console.log (`listening at port ${port}`)
})

app.get("/", (req, res)=> {
    res.status(200).send("<h1>Proyecto Final</h1>")
})

app.use("/api", require("./routes/frases"));
app.use("/api/", require("./routes/frasefinal"));
app.use("/api/", require("./routes/variables"));

// db.execute("SELECT * FROM frasesfinales ").then((res) => console.log("get all", res[0][0])).catch((err) => console.log(err, "not working"))