import GlobalProvider from "./providers/global-provider.tsx";
import AppContainerUi from "./ui/containers/app.container.ui.tsx";
import AppHeader from "./components/layout/app.header.tsx";
import AppMainUi from "./ui/layout/app.main.ui.tsx";
import GlobalStyle from "./global-style.ts";
import TextUi from "./ui/texts/text.ui.tsx";
import FormContainer from "./components/forms/form.container.tsx";
import FeedContainer from "./components/feed/feed.container.tsx";

function App() {

  return (
    <GlobalProvider>
      <GlobalStyle/>
      <AppContainerUi>
        <AppHeader/>
        <AppMainUi>
          <FormContainer/>
          <TextUi>
            Feed
          </TextUi>
          <FeedContainer />
        </AppMainUi>
      </AppContainerUi>
    </GlobalProvider>
  )
}

export default App;
