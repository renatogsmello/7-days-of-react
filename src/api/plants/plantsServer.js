const express = require("express")
const app = express()
const cors = require("cors")
const path = require("path")
const fs = require("fs")

let products

app.use(
	cors({
		origin: "*",
	})
)
fs.readFile(path.join(__dirname, "./plants.json"), "utf-8", (err, data) => {
	if (err) {
		console.log(err)
	} else {
		products = JSON.parse(data)
	}
})
app.get("/plants", (req, res) => {
	return res.json(products)
})
app.listen(4001, () => console.log("rodando na porta 4001"))
