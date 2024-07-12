import {theme} from "./theme.ts";
import {ThemeProvider} from "styled-components";
import {FeedProvider} from "./Contexts/FeedContext.tsx";
import {HomePage} from "./Pages/Home";


export const App = () => {
    return <ThemeProvider theme={theme}>
            <FeedProvider>
                <HomePage/>
            </FeedProvider>
    </ThemeProvider>
}
