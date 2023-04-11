import { useEffect } from "react";

import { LoginForm } from "../../components/LoginForm";

export function Login() {
  useEffect(() => {
    document.title = "Login Page";
  }, []);

  return (
    <div
      className="bg-Sunflower h-screen bg-cover flex justify-end items-end px-12
      max-[768px]:justify-center max-[479px]:px-3
    
    "
    >
      <div className="w-[30%] max-[1440px]:w-[40%] max-[1024px]:w-[50%] max-[768px]:w-[75%]  max-[479px]:w-[100%] flex min-h-[75%] max-[768px]:min-h-[60%]">
        <LoginForm />
      </div>
    </div>
  );
}
