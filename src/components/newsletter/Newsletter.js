import mail from "../../images/mail.png"
import { SpanTitle, SpanSubTitle, Paragraph, InputContainer, IconContainer, Input, ButtonContainer } from "./styled.jsx"

export default function Newsletter() {
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
					<Input />
					<ButtonContainer>
						<button type="button">Assinar newsletter</button>
					</ButtonContainer>
				</div>
			</InputContainer>
		</>
	)
}
