import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RouterContainer from "./routes/router-container";
import { LanguageProvider } from "./contexts/language-context";

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <RouterContainer />
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;
