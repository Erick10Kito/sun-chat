import { Link } from "react-router-dom";
import { ApiMensagens } from "../../data/api";

export function Mensagens() {
  return (
    <div>
      {ApiMensagens.map((ApiMensagem) => {
        return (
          <Link to={`/mensagens/${ApiMensagem.id}`} key={ApiMensagem.id}>
            <h1>{ApiMensagem.title}</h1>
          </Link>
        );
      })}
    </div>
  );
}
