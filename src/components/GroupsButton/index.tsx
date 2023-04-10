import { Link } from "react-router-dom";
import { Dados, IMensagem } from "../../data/api";
interface IGroupsButtonProps {
  slug?: string;
  mensagens?: IMensagem[];
}

export function GroupsButton({ slug, mensagens }: IGroupsButtonProps) {
  const MensagensNaoLidas = mensagens?.filter(
    (mensagem) => mensagem.isRead === false
  );
  return (
    <div className="">
      {Dados.map((grupo) => (
        <Link
          to={`/home/grupos/${grupo.grupoId}`}
          key={grupo.grupoId}
          className="w-full h-full"
        >
          <div
            className={`h-[70px] px-4 flex justify-start items-center shadow ${
              slug === grupo.grupoId ? "bg-yellow1" : ""
            }`}
          >
            <h1>{grupo.grupoName}</h1>
          </div>
        </Link>
      ))}
    </div>
  );
}
