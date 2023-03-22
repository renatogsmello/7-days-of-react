import { VerticalLine, GridLines, YellowVector, ContainerHero, GridHero } from "./AppStyled"
import fundo1 from "./images/image_1.png"
import heroImage from "./images/imagem-hero_1.png"
import yellowVector from "./images/Vector.png"
import "./App.css"
import Menu from "./components/menu/Menu"
import Newsletter from "./components/newsletter/Newsletter"
import HowToGet from "./components/howToGet/HowToGet"
import Deals from "./components/deals/Deals"

function App() {
	return (
		<div className="App" style={{ position: "relative", paddingBottom: "10rem" }}>
			<GridLines>
				<VerticalLine />
				<VerticalLine />
				<VerticalLine />
				<VerticalLine />
				<VerticalLine />
				<VerticalLine />
				<VerticalLine />
				<VerticalLine />
				<VerticalLine />
				<VerticalLine />
				<VerticalLine />
				<VerticalLine />
				<VerticalLine />
				<VerticalLine />
				<VerticalLine />
				<VerticalLine />
				<VerticalLine />
				<VerticalLine />
				<VerticalLine />
			</GridLines>
			<div style={{ backgroundRepeat: "repeat-y", backgroundImage: `url(${fundo1})`, height: "100%" }}></div>

			<YellowVector>
				<img src={yellowVector} alt="Yellow Vector" />
			</YellowVector>
			<Menu />
			<ContainerHero>
				<GridHero>
					<Newsletter />
				</GridHero>
				<img id="hero-image" src={heroImage} alt="Hero Image" />
			</ContainerHero>
			<HowToGet />
			<Deals />
		</div>
	)
}

export default App
