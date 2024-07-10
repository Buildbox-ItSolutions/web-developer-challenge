import "./App.css";
import Header from "./components/AppHeader";
import Form from "./components/AppForm";
import Feed from "./components/AppFeed";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/Theme";
import GlobalStyles from "./styles/global";

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Header />
			<Form />
			<Feed />
		</ThemeProvider>
	);
}
