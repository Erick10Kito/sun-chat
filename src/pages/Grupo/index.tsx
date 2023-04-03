import { User } from "phosphor-react";
import { useParams } from "react-router-dom";
import { HeaderInside } from "../../components/HeaderInside";
import { SidebarGroups } from "../../components/SidebarGroups";
import { Dados } from "../../data/api";

export function Grupo() {
  const { id } = useParams();

  const filteredGrupos = Dados.find((grupo) => grupo.grupoId === id);
  const MensagensGrupo = filteredGrupos?.mensagens;

  return (
    <div className="">
      <div className="flex">
        <div>
          <SidebarGroups slug={id} />
        </div>
        <div className="w-full">
          <div className="mx-8 mt-5 flex flex-col gap-5">
            {MensagensGrupo?.map((mensagem) => (
              <div className="flex gap-2 items-start bg-yellow1 p-6 rounded shadow">
                <div>
                  <User size={28} />
                </div>
                <div>
                  <h3>{mensagem.mensagemAuthor}</h3>
                  <span>{mensagem.mensagemContent}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
