import styled from "styled-components"

export const Card = styled.div`
	display: flex;
	max-width: 62.18rem;
	height: 27.5rem;
	margin-top: 10rem;
	margin-left: auto;
	margin-right: auto;
	box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
	background-color: #ffffff;
`

export const CardBody = styled.div`
	padding-left: 1.5rem;
	padding-top: 3.6rem;

	h3 {
		font-family: "Montserrat";
		font-style: normal;
		font-weight: 400;
		font-size: 22px;
		line-height: 27px;
		color: #202020;
		opacity: 0.5;
	}
	h4 {
		font-family: Elsie_Swash_Caps_black;
		font-style: normal;
		font-weight: 900;
		font-size: 42px;
		line-height: 48px;
		color: #202020;
		margin-top: 0.75rem;
		margin-bottom: 2rem;
	}

	li {
		display: flex;
		align-items: center;
		margin-bottom: 2rem;
		p {
			font-family: "Montserrat";
			font-style: normal;
			font-weight: 400;
			font-size: 22px;
			line-height: 27px;
			color: #202020;
			opacity: 0.5;
			margin-left: 1rem;
		}
		span {
			display: inline-block;
			width: 52px;
			height: 52px;
			background: #ffcb47;
			border-radius: 50%;
		}
	}
`
