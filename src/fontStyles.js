import { createGlobalStyle } from "styled-components"
import ElsieBlack from "./fonts/Elsie_Swash_Caps/ElsieSwashCaps-Black.ttf"
import ElsieRegular from "./fonts/Elsie_Swash_Caps/ElsieSwashCaps-Regular.ttf"

const FontStyles = createGlobalStyle`


@font-face {
	font-family: Elsie_Swash_Caps_black;
	src: url(${ElsieBlack});
}
@font-face {
	font-family: Elsie_Swash_Caps_regular;
	src: url(${ElsieRegular});
}`

export default FontStyles
