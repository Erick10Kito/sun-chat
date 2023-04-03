import { Link } from "react-router-dom";
import { Dados } from "../../data/api";

export function GroupsButton({ slug }: any) {
  return (
    <div className="">
      {Dados.map((grupo) => (
        <Link
          to={`/home/grupos/${grupo.grupoId}`}
          key={grupo.grupoId}
          className="w-full h-full"
        >
          <div
            className={`h-[70px] px-4 flex justify-start items-center shadow ${
              slug === grupo.grupoId ? "bg-yellow1" : ""
            }`}
          >
            <h1>{grupo.grupoName}</h1>
          </div>
        </Link>
      ))}
    </div>
  );
}
