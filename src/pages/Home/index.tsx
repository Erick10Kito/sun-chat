import { ChatsCircle, Sun } from "phosphor-react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import ImageSunshine from "../../assets/SunshineBg.png";
import SunshineMb from "../../assets/SunshineBgMobile.png";
import { Header } from "../../components/Header";

export function Home() {
  useEffect(() => {
    document.title = "Home Page";
  }, []);

  return (
    <div className="h-screen max-[768px]:">
      <Header />
      <div className="h-[70%] max-[1280px]:h-[60%] max-[1024px]:h-[65%]">
        <img
          src={ImageSunshine}
          alt=""
          className="h-full w-full max-[768px]:hidden"
        />
        <img
          src={SunshineMb}
          alt=""
          className="h-full w-full min-[769px]:hidden"
        />
      </div>
      <div className="w-full flex  max-[768px]:flex-col">
        <div className="w-[50%] flex flex-col justify-between bg-yellow1 py-4 px-8 max-[768px]:w-full max-[768px]:px-4">
          <div className="  flex items-start">
            <div>
              <h1 className="text-3xl mb-3 text-left max-[479px]:text-2xl">
                Grupos
              </h1>
              <p className="text-xl text-left max-[479px]:text-base">
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
              <ChatsCircle size={30} weight="regular" /> Ver Grupos
            </Link>
          </div>
        </div>
        <div className="w-[50%] bg-white py-4 px-8 flex flex-col justify-between max-[768px]:w-full max-[768px]:px-4">
          <div className="  flex items-start">
            <div>
              <h1 className="text-3xl mb-3 text-left max-[479px]:text-xl ">
                Favoritas
              </h1>
              <p className="text-xl text-left max-[479px]:text-base">
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
