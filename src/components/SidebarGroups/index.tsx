import { useState } from "react";
import { GroupsButton } from "../GroupsButton";
import Logo from "../../assets/logoBgWhite.png";
import { Link } from "react-router-dom";
import { ArrowElbowDownLeft } from "phosphor-react";

export function SidebarGroups({ slug }: any) {
  const [showGroup, setShowGroup] = useState(false);

  function handleShowGroup() {
    setShowGroup(!showGroup);
  }
  return (
    <div className="w-[300px] bg-white shadow-2xl h-screen py-5 flex flex-col">
      <div>
        <div className="flex justify-center pb-5 ">
          <Link to="/home">
            <img src={Logo} alt="" className="w-[150px]" />
          </Link>
        </div>
        <div className="">
          <div>
            <GroupsButton slug={slug} />
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
  );
}
