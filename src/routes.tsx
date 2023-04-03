import { Route, Routes } from "react-router-dom";
import { Grupos } from "./pages/Grupos";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Grupo } from "./pages/Grupo";

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/home/grupos" element={<Grupos />} />
      <Route path="/home/grupos/:id" element={<Grupo />} />
    </Routes>
  );
};
export default Rotas;
