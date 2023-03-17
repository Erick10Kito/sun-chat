import { ApiMensagens } from "../../data/api";

export function Mensagens() {
  return (
    <div>
      {ApiMensagens.map((ApiMensagem) => {
        return <h1 key={ApiMensagem.id}>{ApiMensagem.title}</h1>;
      })}
    </div>
  );
}
