import Header from './components/Header';
import Main from './components/Main';
import styled from 'styled-components';

const StylizedApp = styled.div`
	margin: 0;
	padding: 0;
	background-color: #242424;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	padding-bottom: 170px;
	overflow-x: hidden;
`;

function App() {
	return (
		<StylizedApp>
			<Header />
			<Main />
		</StylizedApp>
	);
}

export default App;
