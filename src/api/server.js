require("dotenv").config()
const express = require("express")
const cors = require("cors")
const app = express()

const apiKey = process.env.SENDGRID_API_KEY

const sgMail = require("@sendgrid/mail")
sgMail.setApiKey(apiKey)

app.use(cors())

app.listen(3001, () => console.log("rodando na porta 3001"))

app.get("/send-email", (req, res) => {
	console.log("req query", req.query)
	const { sender, name } = req.query
	console.log("email e name", sender, name)

	const msg = {
		to: sender,
		from: "mello-renato@hotmail.com",
		subject: "Bem vindo a Casa Verde Newsletter",
		text: `
		Olá, ${name}.
		Boas-vindas à Casa Verde! Você se cadastrou em nossa newsletter e vai começar a receber e-mails com as novidades de nossa loja e dicas de como cuidar de suas plantas.
		Até logo!`,
	}

	sgMail
		.send(msg)
		.then(() => console.log("e-mail enviado com sucesso"))
		.catch((error) => console.log(error))
})
