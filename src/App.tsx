import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { usePost } from './hooks/post'

function App() {
	const { data, createPost, removePost } = usePost([])
	return (
		<div className="App">
			<body>
				<nav>
					<div></div>
				</nav>
				<main>
					<div>
						<input type="text" placeholder='Digite seu nome' />
						<input type="Mensagem" />
						<button>Descartar</button>
						<button>Publicar</button>
					</div>
				</main>
				<section>
					<h1>Feed</h1>
					<article>
						<image></image>
						<div>
							<p></p>
						</div>
						<div>
							<p></p>
							<p></p>
						</div>
					</article>
				</section>
			</body>
		</div>
	)
}

export default App
