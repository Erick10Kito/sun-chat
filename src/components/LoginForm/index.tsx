import { SignIn } from "phosphor-react";
import React, { ChangeEvent, FormEvent, SetStateAction, useState } from "react";
import { Link } from "react-router-dom";
import useLocalStorageState from "use-local-storage-state";
import { MyContext, useMyContext } from "../../contexts/loginContext";
import { names } from "../../services/names";

export function LoginForm() {
  const { handleChangeTextLogin, isActive } = useMyContext();

  return (
    <div className="w-full px-5 flex justify-center flex-col bg-bgForm py-8 rounded-t-xl ">
      <div>
        <h1 className="text-center text-6xl mb-14 font-Quintessential">
          Login
        </h1>
      </div>
      <div>
        <div>
          <p className="text-2xl mb-6 font-Quintessential">Nome Completo:</p>
        </div>
        <div className="mb-14 w-full">
          <input
            type="text"
            onChange={handleChangeTextLogin}
            className="h-12 shadow-lg rounded bg-bgInput px-2 text-2xl w-full"
          />
        </div>

        {!isActive ? (
          <button
            disabled
            className="disabled:cursor-not-allowed w-full"
            title="Digite um nome válido"
          >
            <div className="flex">
              <div className="py-2 px-3 bg-bgButtonLogin w-full flex justify-center items-center h-14 rounded-tl-xl rounded-bl-xl text-2xl font-Quintessential">
                Entrar
              </div>
              <div className="py-2 px-3 bg-bgIconLogin w-[30%] flex justify-center items-center h-14 rounded-tr-xl rounded-br-xl">
                <SignIn size={32} />
              </div>
            </div>
          </button>
        ) : (
          <Link to="/home">
            <div className="flex">
              <div className="py-2 px-3 bg-bgButtonLogin w-full flex justify-center items-center h-14 rounded-tl-xl rounded-bl-xl text-2xl font-Quintessential">
                Entrar
              </div>
              <div className="py-2 px-3 bg-bgIconLogin w-[30%] flex justify-center items-center h-14 rounded-tr-xl rounded-br-xl">
                <SignIn size={32} />
              </div>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}
