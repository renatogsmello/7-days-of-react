import styled from "styled-components"
import DealsCard from "./Card"
import { useEffect, useMemo, useState } from "react"
import Filters from "./Filters"

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
	let [pricesData, setPricesData] = useState()

	useEffect(() => {
		fetch("https://7-days-of-react-api.vercel.app/api/plants")
			.then((res) => {
				return res.json()
			})
			.then((data) => {
				const available = data.filter((d) => d.ordem > 0)
				available.sort((a, b) => a.preco - b.preco)
				setPlants(available)
			})
	}, [])

	const sortProducts = (ordem) => {
		switch (ordem) {
			case "priceMin":
				plants.sort((a, b) => a.preco - b.preco)
				break

			case "priceMax":
				plants.sort((a, b) => b.preco - a.preco)
				break

			case "a-z":
				plants.sort((a, b) => (a.name > b.name) - (a.name < b.name))
				break

			case "z-a":
				plants.sort((a, b) => (b.name > a.name) - (b.name < a.name))
				break

			default:
				plants.sort((a, b) => a.preco - b.preco)
				break
		}
		setPlants([...plants])
	}

	const getPricesData = (val) => {
		setPricesData(val)
	}

	const filteredItems = useMemo(() => {
		return plants.filter((plant) => {
			if (pricesData.min == "" && pricesData.max == "") {
				return plant
			}
			if (pricesData.min == "") {
				return plant.preco < pricesData.max
			}
			if (pricesData.max == "") {
				return plant.preco > pricesData.min
			}
			return plant.preco > pricesData.min && plant.preco < pricesData.max
		})
	})

	return (
		<DealsContainer>
			<Intro>Nossas</Intro>
			<Title> Plantas</Title>
			<Filters sort={sortProducts} getData={getPricesData} />
			<CardsGrid>
				{filteredItems.map((plant) => {
					return <DealsCard key={plant.name} url={plant.img} name={plant.name} price={plant.preco} />
				})}
			</CardsGrid>
		</DealsContainer>
	)
}
