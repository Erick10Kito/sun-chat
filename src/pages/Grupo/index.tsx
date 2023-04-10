import { User } from "phosphor-react";
import { useParams } from "react-router-dom";
import { Mensagem } from "../../components/Mensagem";

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
          <SidebarGroups slug={id} mensagens={MensagensGrupo} />
        </div>
        <div className="w-full">
          <div className="mx-8 mt-5 flex flex-col gap-5">
            {MensagensGrupo?.map((mensagem) => (
              <Mensagem mensagem={mensagem} key={mensagem.mensagemId} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
