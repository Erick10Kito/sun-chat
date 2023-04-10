import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { Grupos } from "./pages/Grupos";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Grupo } from "./pages/Grupo";
import { useMyContext } from "./contexts/loginContext";

interface IPrivate {
  isActive: boolean;
}

function PrivateRouter({ isActive }: IPrivate) {
  if (!isActive) {
    return <Navigate to={"/"} replace />;
  }
  return <Outlet />;
}

const Rotas = () => {
  const { isActive } = useMyContext();

  return (
    <>
      <Routes>
        {/* Rotas Publicas */}
        <Route path="/" element={<Login />} />

        {/* Rotas Privadas */}
        <Route element={<PrivateRouter isActive={isActive} />}>
          <Route path="/home" element={<Home />} />
          <Route path="/home/grupos" element={<Grupos />} />
          <Route path="/home/grupos/:id" element={<Grupo />} />
        </Route>
      </Routes>
    </>
  );
};
export default Rotas;
