import { useState } from "react"
import mail from "../../images/mail.png"
import { SpanTitle, SpanSubTitle, Paragraph, InputContainer, IconContainer, Input, ButtonContainer, Button } from "./styled.jsx"

export default function Newsletter() {
	const [isDisabled, setIsDisabled] = useState(true)
	const [email, setEmail] = useState("")

	const sendEmail = () => {
		let name = email.replace(/\@.*$/, "")
		fetch(`https://7-days-of-react-api.vercel.app/api/send-email?sender=${email}&name=${name}`).catch((err) => console.log(err))
	}

	return (
		<>
			<SpanTitle>Sua casa com as</SpanTitle>

			<SpanSubTitle>melhores plantas</SpanSubTitle>

			<Paragraph>
				Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e
				assine nossa newsletter para saber das novidades da marca.
			</Paragraph>
			<InputContainer>
				<div style={{ position: "relative", display: "flex", marginTop: 0.5 + "rem", borderRadius: 0.375 + "rem" }}>
					<IconContainer>
						<img src={mail} />
					</IconContainer>
					<Input
						onChange={(e) => {
							setIsDisabled(!e.target.validity.valid)
							setEmail(e.target.value)
						}}
					/>

					<ButtonContainer>
						<Button disabled={isDisabled} onClick={() => sendEmail()}>
							Assinar newsletter
						</Button>
					</ButtonContainer>
				</div>
			</InputContainer>
		</>
	)
}
