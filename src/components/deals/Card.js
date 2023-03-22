import styled from "styled-components"
import Seta from "../../images/seta.png"

const Card = styled.div`
	background: #ffffff;
	box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
	display: flex;
	height: 12.5rem;
	position: relative;
`

const CardTitle = styled.span`
	font-family: Elsie_Swash_Caps_black;
	font-style: normal;
	font-size: 32px;
	line-height: 37px;
	color: #202020;
	margin-bottom: 0.5rem;
`

const CardPrice = styled.span`
	font-family: "Montserrat";
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 20px;
	color: #202020;
	opacity: 0.5;
	margin-bottom: 1.5rem;
`

const CardBody = styled.div`
	display: flex;
	flex-direction: column;
	padding-top: 1.75rem;
	padding-right: 2rem;
	position: relative;
	left: 12.5rem;
	width: min-content;
	img {
		margin-left: 1rem;
		width: 16px;
		height: 10px;
	}
`

export default function DealsCard({ url, name, price }) {
	return (
		<Card>
			<img style={{ position: "absolute", height: "100%" }} src={`./images/${url}.png`} />
			<CardBody>
				<CardTitle>{name}</CardTitle>
				<CardPrice>R$ {price}</CardPrice>
				<a>
					Comprar <img src={Seta} />
				</a>
			</CardBody>
		</Card>
	)
}
