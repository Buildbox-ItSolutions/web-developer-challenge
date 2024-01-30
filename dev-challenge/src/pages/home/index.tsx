// home.tsx
import React from 'react';

const Home: React.FC = () => {
  return (
	<div className="max-w-[800px] mx-auto">
	  	<h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-2 mt-4">Cadastre sua mensagem</h1>

		<div className="grid grid-cols-1 gap-x-8 gap-y-6">
			<form action="#" method="POST">
				<div>
					<label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900 mt-4">
						Seu nome
					</label>
					<div className="mt-2.5">
						<input
						type="text"
						name="first-name"
						id="first-name"
						autoComplete="given-name"
						required={true}
						className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						/>
					</div>
				</div>

				<div>
					<label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900 mt-4">
						Sua mensagem
					</label>
					<div className="mt-2.5">
					<textarea
						name="message"
						id="message"
						required={true}
						rows={4}
						className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						defaultValue={''}
						/>
					</div>
				</div>

				<div>
					<label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900 mt-4">
						Selecione sua foto
					</label>
					<div className="mt-2.5">
						<input
							type="file"
							id="file-upload"
							name="file-upload"
							required={true}
							// Adicione os manipuladores de eventos onChange e onBlur conforme necessário
						/>
					</div>
				</div>

				<div>
					<div className="mt-2.5">

					<button
						type="submit"
						className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>
						Salvar
					</button>
					</div>

				</div>


			</form>
		</div>


		<div className="grid grid-cols-1 gap-x-8 gap-y-6 mt-9">
			<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-2 mt-4">Lista de mensagens</h2>
			<div>
				<img />
				<h2>Titulo da mensagen</h2>
				<p>Texto completo</p>
			</div>
		</div>

    </div>
  );
}

export default Home;
