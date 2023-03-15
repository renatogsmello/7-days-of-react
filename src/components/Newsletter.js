import mail from "../images/mail.png"

export default function Newsletter() {
	return (
		<>
			<span className="text-neutral-900 text-xl block opacity-50 col-span-4">Sua casa com as</span>
			<span className="text-neutral-900 text-8xl elsie-black font-black block mb-6 mt-3 col-span-2">melhores plantas</span>
			<p className="text-neutral-900 opacity-50 col-span-3">
				Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e
				assine nossa newsletter para saber das novidades da marca.
			</p>
			<div className="mt-9 col-span-4">
				<div className="relative mt-2 rounded-md">
					<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
						<img src={mail} />
					</div>
					<input
						type="text"
						name="newsletter"
						id="newsletter"
						className="h-16 block w-full rounded-md border-0 py-1.5 pl-12 pr-20 shadow-lg shadow-neutral-300/20 text-gray-900 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
						placeholder="Insira seu e-mail"
					/>
					<div className="absolute inset-y-0 right-0 flex items-center">
						<button className="h-full rounded-r-md border-0 bg-yellow-400 shadow-lg shadow-yellow-500/40 flex items-center px-4 text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-base sm:text-sm">
							Assinar newsletter
						</button>
					</div>
				</div>
			</div>
		</>
	)
}
