import { BrowserRouter } from "react-router-dom";
import { MyContextProvider } from "./contexts/loginContext";

import Routes from "./routes";

function App() {
  return (
    <MyContextProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </MyContextProvider>
  );
}

export default App;
