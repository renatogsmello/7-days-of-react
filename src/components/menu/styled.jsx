import styled from "styled-components"

const Header = styled.header`
	width: 75rem;
	margin: auto;
	padding-top: 0.75rem;
	display: flex;
	align-items: baseline;
	justify-content: space-between;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;

	ul {
		display: flex;

		span {
			margin-left: 1rem;
			margin-right: 1rem;
		}
	}
`

export default Header
