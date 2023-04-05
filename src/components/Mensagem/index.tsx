import { User } from "phosphor-react";

export function Mensagem({ mensagem }: any) {
  return (
    <div className="flex gap-2 items-start bg-yellow1 p-6 rounded shadow">
      <div>
        <User size={28} />
      </div>
      <div>
        <h3>{mensagem.mensagemAuthor}</h3>
        <span>{mensagem.mensagemContent}</span>
      </div>
    </div>
  );
}
