import CardImage from "../../images/image_3.png"
import { Card, CardBody } from "./styled"

export default function HowToGet() {
	return (
		<Card>
			<img src={CardImage} />
			<CardBody>
				<h3>Como conseguir</h3>
				<h4>minha planta</h4>
				<ul>
					<li>
						<span></span>
						<p>Escolha suas plantas</p>
					</li>
					<li>
						<span></span>
						<p>Faça seu pedido</p>
					</li>
					<li>
						<span></span>
						<p>Aguarde na sua casa</p>
					</li>
				</ul>
			</CardBody>
		</Card>
	)
}
