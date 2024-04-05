import './Main.css';
import Form from '../Form';
import Feed from '../Feed';
import { Provider } from './context';

function Main() {
	return (
		<main>
			<Provider>
				<Form />
				<Feed />
			</Provider>
		</main>
	);
}

export default Main;
