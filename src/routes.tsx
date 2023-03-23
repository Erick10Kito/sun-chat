import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Mensagens } from "./pages/Mensagens";
import { TextMensage } from "./pages/TextMensage";

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/home/mensagens" element={<Mensagens />} />
      <Route path="/home/mensagens/:id" element={<TextMensage />} />
    </Routes>
  );
};
export default Rotas;
