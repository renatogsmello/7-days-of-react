import styled from "styled-components"

export const SpanTitle = styled.h2`
	color: #171717;
	display: block;
	font-size: 1.25rem;
	opacity: 50%;
	grid-column: span 4 / span 4;
`
export const SpanSubTitle = styled.h1`
	color: #171717;
	display: block;
	font-size: 6rem;
	line-height: 94px;
	grid-column: span 2 / span 2;
	font-family: Elsie_Swash_Caps_black;
	margin-bottom: 1.5rem;
	margin-top: 0.75rem;
`
export const Paragraph = styled.p`
	color: #171717;
	opacity: 50%;
	grid-column: span 3 / span 3;
	line-height: 26px;
`
export const InputContainer = styled.div`
	margin-top: 2.25rem;
	grid-column: span 4 / span 4;
`
export const IconContainer = styled.div`
	pointer-events: none;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	display: flex;
	align-items: center;
	padding-left: 0.75rem;
`
export const Input = styled.input.attrs({ type: "text", placeholder: "Insira seu e-mail" })`
	height: 4rem;
	width: 100%;
	border: none;
	border-radius: 0.375rem;
	padding-left: 3rem;
	padding-right: 5rem;
	padding-top: 0.375rem;
	padding-bottom: 0.375rem;
	box-shadow: rgba(100, 100, 100, 0.1) 0px 32px 36px 0px;
	color: #111827;
`
export const ButtonContainer = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	display: flex;
	align-items: center;

	button {
		height: 100%;
		border: none;
		border-top-right-radius: 0.375rem;
		border-bottom-right-radius: 0.375rem;
		background-color: #ffcb47;
		box-shadow: 0px 32px 36px 0px rgb(255 216 118 / 20%);
		display: flex;
		align-items: center;
		padding-right: 1rem;
		padding-left: 1rem;
		color: white;
		cursor: pointer;
		white-space: nowrap;
		font-size: 1rem;
	}
`
