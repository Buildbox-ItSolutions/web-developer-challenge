import { GlobalProvider } from './hooks/context/GlobalState'
import Home from './pages/home'

function App() {
    return (
        <>
            <GlobalProvider>
                <Home />
            </GlobalProvider>
        </>
    )
}

export default App
