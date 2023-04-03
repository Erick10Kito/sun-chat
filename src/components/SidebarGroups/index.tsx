import { useState } from "react";
import { GroupsButton } from "../GroupsButton";

export function SidebarGroups({ slug }: any) {
  const [showGroup, setShowGroup] = useState(false);

  function handleShowGroup() {
    setShowGroup(!showGroup);
  }
  return (
    <div className="w-[300px] bg-white shadow-2xl h-screen py-5">
      <div className="flex justify-center pb-5 ">
        <h1>LOGO</h1>
      </div>
      <div className="">
        <div>
          <GroupsButton slug={slug} />
        </div>
      </div>
    </div>
  );
}
