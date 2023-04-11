import { Link } from "react-router-dom";
import Logo from "../../assets/logoBgWhite.png";
import { useMyContext } from "../../contexts/loginContext";

export function Header() {
  const { handleTurnFalseIsActive } = useMyContext();
  return (
    <div className="absolute top-0 left-0 bg-[transparent] px-7 w-full flex items-center justify-between bg-opacity-50 py-5">
      <img src={Logo} alt="" className="w-[120px]" />

      <Link
        onClick={handleTurnFalseIsActive}
        to="/"
        className="py-1 px-6 bg-yellow1 rounded shadow hover:bg-[#f9ce58a9]"
      >
        Sair
      </Link>
    </div>
  );
}
