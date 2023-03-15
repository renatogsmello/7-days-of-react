import fundo1 from "./images/image_1.png"
import fundo2 from "./images/image_2.png"
import heroImage from "./images/imagem-hero_1.png"

import yellowVector from "./images/Vector.png"

import "./App.css"
import Menu from "./components/Menu"
import Newsletter from "./components/Newsletter"

function App() {
	return (
		<div className="App">
			<div className="mask -z-10">
				<img id="yellow-vector" src={yellowVector} alt="Yellow Vector" className="absolute right-0" />
			</div>
			<div className="absolute flex flex-col -z-10">
				<img src={fundo1} alt="fundo 1" />
				<img src={fundo2} alt="fundo 2" />
			</div>
			<Menu />
			<div className="w-[75rem] mx-auto mt-40 flex">
				<div className="max-w-2xl grid grid-cols-4 gap-4">
					<Newsletter />
				</div>
				<img src={heroImage} alt="Hero Image" className="absolute top-0 right-80 -z-10" />
			</div>
		</div>
	)
}

export default App
