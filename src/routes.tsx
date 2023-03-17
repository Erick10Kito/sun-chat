import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Mensagens } from "./pages/Mensagens";
import { TextMensage } from "./pages/TextMensage";

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mensagens" element={<Mensagens />} />
      <Route path="/mensagens/:id" element={<TextMensage />} />
    </Routes>
  );
};
export default Rotas;
