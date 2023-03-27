// import { query } from "express"
import { useEffect, useState } from "react"
import styled from "styled-components"

const Form = styled.form`
	display: flex;
	justify-content: space-between;
	margin-top: 2rem;
	margin-bottom: 2rem;

	label {
		margin-right: 1rem;
	}

	select {
		border-bottom: 2px solid #ffcb47;
		display: inline-block;
	}
	svg {
		width: 1.25rem;
		height: 1.25rem;
		margin-left: 0.25rem;
		vertical-align: middle;
	}
`

const PriceFilterContainer = styled.div`
	input {
		border-bottom: 2px solid #ffcb47;
		width: 5rem;
		&:first-of-type {
			margin-right: 1.5rem;
		}
	}
`

export default function Filters({ sort, getData }) {
	let [queryMin, setQueryMin] = useState("")
	let [queryMax, setQueryMax] = useState("")

	let data = {
		min: queryMin,
		max: queryMax,
	}

	useEffect(() => {
		getData(data)
	}, [queryMin, queryMax])
	return (
		<Form>
			<div>
				<label>Ordenar por</label>
				<select onChange={(e) => sort(e.target.value)}>
					<option value="priceMin">Preço crescente</option>
					<option value="priceMax">Preço decrescente</option>
					<option value="a-z">A - Z</option>
					<option value="z-a">Z - A</option>
				</select>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
				</svg>
			</div>
			<PriceFilterContainer>
				<label>Preço Mínimo</label>
				<input onChange={(e) => setQueryMin(e.target.value)} type="number" />
				<label>Preço Máximo</label>
				<input onChange={(e) => setQueryMax(e.target.value)} type="number" />
			</PriceFilterContainer>
		</Form>
	)
}
