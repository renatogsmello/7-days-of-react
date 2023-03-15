import logo from "../images/logo.png"

const menuItems = [
	{ item: "Como fazer", link: "como-fazer" },
	{ item: "Ofertas", link: "ofertas" },
	{ item: "Depoimentos", link: "depoimentos" },
	{ item: "Videos", link: "videos" },
	{ item: "Meu Carrinho", link: "meu-carrinho" },
]

export default function Menu() {
	return (
		<header className="w-[75rem] mx-auto pt-3 flex items-baseline justify-between">
			<img src={logo} className="App-logo" alt="logo" />
			<ul className="flex">
				{menuItems.map((i, index, menuItems) => {
					return index + 1 === menuItems.length ? (
						<li key={i.item}>
							<a href={i.link}>{i.item}</a>
						</li>
					) : (
						<li key={i.item}>
							<a href={i.link}>{i.item}</a>
							<span className="mx-4">/</span>
						</li>
					)
				})}
			</ul>
		</header>
	)
}
