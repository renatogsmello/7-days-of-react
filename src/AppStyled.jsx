import styled from "styled-components"

export const YellowVector = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	width: 62.5rem;
	height: 62.5rem;
	overflow: hidden;
	z-index: -10;

	img {
		position: absolute;
		right: 0;
		top: 0;
	}
`

export const BackgroundImages = styled.div`
	position: absolute;
	left: 0;
	right: 0;
	z-index: -10;

	img {
		width: 100%;
	}
`

export const ContainerHero = styled.div`
	margin-right: auto;
	margin-left: auto;
	width: 75rem;
	margin-top: 10rem;
	display: flex;

	img#hero-image {
		position: absolute;
		top: 0;
		right: 20rem;
		z-index: -10;
	}
`
export const GridHero = styled.div`
	max-width: 42rem;
	display: grid;
	grid-template-columns: repeat(4, minmax(0, 1fr));
	gap: 1rem;
`

export const GridLines = styled.div`
	display: grid;
	grid-template-columns: repeat(19, minmax(0, 1fr));
	position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	padding-left: 3.7rem;
	z-index -30;
`

export const VerticalLine = styled.div`
	border-left: 1px solid #f5f5f5;
	height: 100%;
`
