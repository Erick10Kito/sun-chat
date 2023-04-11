import { ArrowLeft } from "phosphor-react";
import { GroupsButton } from "../../components/GroupsButton";
import { SidebarGroups } from "../../components/SidebarGroups";

export function Grupos() {
  return (
    <div className="flex">
      <div>
        <SidebarGroups />
      </div>
      <div className="flex justify-center items-center w-full max-[768px]:hidden">
        <h1 className="font-Quintessential text-3xl font-bold text-gray1">
          SELECIONE
          <br /> O GRUPO
        </h1>
      </div>
      <div className="min-[769px]:hidden w-full">
        <div className="absolute left-[40px] top-1 z-10">
          <div className="flex gap-1 items-start">
            <ArrowLeft size={32} className="text-gray1" />
            <span className="text-gray1">
              Abra a barra lateral para selecionar os grupos
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center w-full h-screen">
          <h1 className="font-Quintessential text-3xl font-bold text-gray1">
            SELECIONE
            <br /> O GRUPO
          </h1>
        </div>
      </div>
    </div>
  );
}
