import { User } from "phosphor-react";
import useLocalStorageState from "use-local-storage-state";
import { IMensagem } from "../../data/api";
interface IMensagemProps {
  mensagem: IMensagem;
}

export function Mensagem({ mensagem }: IMensagemProps) {
  const [read, setRead] = useLocalStorageState(
    `messageWasReadSunChat${mensagem.mensagemId}`,
    {
      defaultValue: mensagem.isRead,
    }
  );

  function handleMessageIsRead(event: React.ChangeEvent<HTMLInputElement>) {
    setRead(event.target.checked);
  }
  return (
    <div className="flex justify-between bg-yellow1 p-6 rounded shadow">
      <div className="flex gap-2 items-start">
        <div>
          <User size={28} />
        </div>
        <div>
          <h3>{mensagem.mensagemAuthor}</h3>
          <span>{mensagem.mensagemContent}</span>
        </div>
      </div>
      <div>
        <input
          type="checkbox"
          checked={read}
          onChange={handleMessageIsRead}
          title="Marcar como lida"
        />
      </div>
    </div>
  );
}
