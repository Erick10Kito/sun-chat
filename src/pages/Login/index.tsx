import { useEffect } from "react";

import { LoginForm } from "../../components/LoginForm";

export function Login() {
  useEffect(() => {
    document.title = "Login Page";
  }, []);

  return (
    <div className="bg-Sunflower h-screen bg-cover flex justify-end items-end px-12">
      <div className="bg-bgForm w-[35%] min-h-[75%] py-8 flex justify-center items-center flex-col rounded-t-xl">
        <h1 className="text-center text-6xl mb-14 font-Quintessential">
          Login
        </h1>
        <LoginForm />
      </div>
    </div>
  );
}
