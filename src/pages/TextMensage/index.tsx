import { ApiMensagens } from "../../data/api";

export function TextMensage() {
  return (
    <div>
      {ApiMensagens.map((ApiMensagem) => {
        return (
          <div key={ApiMensagem.id}>
            <h1>{ApiMensagem.title}</h1>
            <p>{ApiMensagem.text}</p>
          </div>
        );
      })}
    </div>
  );
}
