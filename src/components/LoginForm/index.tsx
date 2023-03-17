import { useState } from "react";
import { Link } from "react-router-dom";

export function LoginForm() {
  const [userText, setUserText] = useState("");

  function handleButtonLoginNameError() {
    if (userText !== "Bruna Alexia Almeida" && "Erick de Bem Campos") {
    }
  }

  return (
    <div>
      <div>
        <p>Digite abaixo o seu nome completo.</p>
      </div>
      <div>
        <input
          type="text"
          onChange={(event) => setUserText(event.target.value)}
        />
      </div>
      {userText !== "teste" && "tete" ? (
        <button>Entrar</button>
      ) : (
        <Link to="/mensagens">Entrar</Link>
      )}
    </div>
  );
}
