import styled from "styled-components"

const Header = styled.header`
	width: 75rem;
	margin: auto;
	padding-top: 0.75rem;
	display: flex;
	align-items: baseline;
	justify-content: space-between;

	ul {
		display: flex;

		span {
			margin-left: 1rem;
			margin-right: 1rem;
		}
	}
`

export default Header
