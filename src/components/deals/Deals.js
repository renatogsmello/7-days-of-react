import styled from "styled-components"
import DealsCard from "./Card"
import { useEffect, useState } from "react"

const DealsContainer = styled.div`
	margin-right: auto;
	margin-left: auto;
	width: 75rem;
	margin-bottom: 10rem;
`

const Intro = styled.p`
	font-family: "Montserrat";
	font-style: normal;
	font-weight: 400;
	font-size: 22px;
	line-height: 27px;
	text-align: center;
	color: #202020;
	opacity: 0.5;
	margin-top: 2.75rem;
	margin-bottom: 0.75rem;
`

const Title = styled.h3`
	font-family: Elsie_Swash_Caps_black;
	font-style: normal;
	font-weight: 900;
	font-size: 82px;
	line-height: 94px;
	text-align: center;
	color: #202020;
`

const CardsGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	gap: 1rem;
`

export default function Deals() {
	let [plants, setPlants] = useState([])

	useEffect(() => {
		fetch("http://localhost:4001/plants")
			.then((res) => {
				return res.json()
			})
			.then((data) => {
				const available = data.filter((d) => d.ordem > 0).slice(0, 6)
				setPlants(available)
			})
	}, [])

	return (
		<DealsContainer>
			<Intro>Conheça nossas</Intro>
			<Title>ofertas</Title>
			<CardsGrid>
				{plants.map((plant) => {
					return <DealsCard key={plant.name} url={plant.img} name={plant.name} price={plant.preco} />
				})}
			</CardsGrid>
		</DealsContainer>
	)
}
