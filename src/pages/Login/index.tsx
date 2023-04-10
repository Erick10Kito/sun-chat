import { useEffect } from "react";

import { LoginForm } from "../../components/LoginForm";

export function Login() {
  useEffect(() => {
    document.title = "Login Page";
  }, []);

  return (
    <div
      className="bg-Sunflower h-screen bg-cover flex justify-end items-end px-12
      max-[768px]:justify-center max-[479px]:px-4
    
    "
    >
      <div className="  w-[35%]  max-[1280px]:w-[40%] max-[1024px]:w-[50%] max-[768px]:w-[75%]  max-[479px]:w-[100%]">
        <div
          className="h-full w-full py-8 bg-bgForm min-h-[75%] flex justify-center items-center flex-col rounded-t-xl  max-[768px]:min-h-[60%]
      
      "
        >
          <h1 className="text-center text-6xl mb-14 font-Quintessential">
            Login
          </h1>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
