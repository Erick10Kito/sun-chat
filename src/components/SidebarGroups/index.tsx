import { useState } from "react";
import { GroupsButton } from "../GroupsButton";
import Logo from "../../assets/logoBgWhite.png";
import { Link } from "react-router-dom";
import { ArrowElbowDownLeft, CaretLeft, CaretRight } from "phosphor-react";
import { IMensagem } from "../../data/api";

interface ISidebarGroupsProps {
  slug?: string;
  mensagens?: IMensagem[];
}

export function SidebarGroups({ slug, mensagens }: ISidebarGroupsProps) {
  const [showSidebar, setShowSidebar] = useState(false);

  function handleShowSidebar() {
    setShowSidebar(!showSidebar);
  }

  return (
    <div className="flex">
      <div
        className={`w-[300px] bg-white shadow-2xl h-screen py-5 flex flex-col ${
          showSidebar === false ? "max-[768px]:hidden" : "max-[768px]:flex"
        } max-[768px]:absolute max-[768px]:z-20`}
      >
        <div>
          <div className="flex justify-center pb-5 ">
            <div className="hidden max-[768px]:block absolute right-[-12px]">
              <button
                onClick={handleShowSidebar}
                className="h-8 w-8 bg-black rounded-full flex justify-center items-center"
              >
                <CaretLeft size={20} color="white" />
              </button>
            </div>
            <Link to="/home">
              <img src={Logo} alt="" className="w-[150px]" />
            </Link>
          </div>
          <div className="">
            <div>
              <GroupsButton slug={slug} mensagens={mensagens} />
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-end px-4">
          <Link to="/home" className="flex items-center gap-1">
            <ArrowElbowDownLeft size={24} weight="bold" />
            <p>Voltar</p>
          </Link>
        </div>
      </div>
      <div
        className={`hidden max-[768px]:block absolute left-[4px] top-[4px] ${
          showSidebar === true ? "!hidden" : ""
        }`}
      >
        <button
          onClick={handleShowSidebar}
          className="h-8 w-8 bg-black rounded-full flex justify-center items-center"
        >
          <CaretRight size={20} color="white" />
        </button>
      </div>
    </div>
  );
}
