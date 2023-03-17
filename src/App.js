import { BackgroundImages, VerticalLine, GridLines, YellowVector, ContainerHero, GridHero } from "./AppStyled"
import fundo1 from "./images/image_1.png"
import fundo2 from "./images/image_2.png"
import heroImage from "./images/imagem-hero_1.png"
import yellowVector from "./images/Vector.png"
import "./App.css"
import Menu from "./components/menu/Menu"
import Newsletter from "./components/newsletter/Newsletter"

function App() {
	return (
		<div className="App">
			<BackgroundImages>
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
				<div style={{ display: "flex", flexDirection: "column" }}>
					<img src={fundo1} alt="fundo 1" />
					<img src={fundo2} alt="fundo 2" />
				</div>
			</BackgroundImages>
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
		</div>
	)
}

export default App
