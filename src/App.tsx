import "./App.css";
import Header from "./components/AppHeader";
import Form from "./components/AppForm";
import Feed from "./components/AppFeed";
import PostProvider from "./context/PostContext";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/Theme";
import GlobalStyles from "./styles/global";

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Header />
			<PostProvider>
				<Form />
				<Feed />
			</PostProvider>
		</ThemeProvider>
	);
}
