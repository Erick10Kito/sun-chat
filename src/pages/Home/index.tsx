import { ChatsCircle, Sun } from "phosphor-react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import ImageSunshine from "../../assets/SunshineBg.png";
import { Header } from "../../components/Header";

export function Home() {
  useEffect(() => {
    document.title = "Home Page";
  }, []);

  return (
    <div className="h-screen">
      <Header />
      <div className="h-[60%]">
        <img src={ImageSunshine} alt="" className="h-full w-full" />
      </div>
      <div className="w-full flex h-[40%] fixed">
        <div className="w-[50%] flex flex-col justify-between bg-yellow1 py-4 px-8">
          <div className="  flex items-start">
            <div>
              <h1 className="text-3xl mb-3 text-left">Grupos</h1>
              <p className="text-xl text-left">
                Entre agora para ver as mensagens novas que você recebeu no
                grupo!
              </p>
            </div>
          </div>
          <div className="flex items-end">
            <Link
              to="/home/grupos"
              className="flex items-center gap-3 mt-14 px-8 py-4 min-w-[200px] w-[300px] border-white border"
            >
              <ChatsCircle size={30} weight="bold" /> Ver Grupos
            </Link>
          </div>
        </div>
        <div className="w-[50%] bg-white py-4 px-8 flex flex-col justify-between">
          <div className="  flex items-start">
            <div>
              <h1 className="text-3xl mb-3 text-left">Favoritas</h1>
              <p className="text-xl text-left">
                Entre e veja as mensagens que você marcou como favoritas!
              </p>
            </div>
          </div>
          <div className="flex items-end ">
            <button className="flex items-center gap-3 mt-14 px-8 py-4 min-w-[200px] w-[300px] border-yellow1 border">
              <Sun size={30} /> Ver Mensagens Favoritas
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
