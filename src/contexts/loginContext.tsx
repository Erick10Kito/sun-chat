import React, { Children, createContext, useContext } from "react";
import useLocalStorageState from "use-local-storage-state";
import { names } from "../services/names";
interface MyContextType {
  handleChangeTextLogin: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isActive: boolean;
  handleTurnFalseIsActive: () => void;
}

export const useMyContext = () => useContext(MyContext);

export const MyContext = createContext<MyContextType>({} as MyContextType);

export const MyContextProvider = ({ children }: any) => {
  const [isActive, setIsActive] = useLocalStorageState(`UserLogin`, {
    defaultValue: false,
  });

  function handleChangeTextLogin(
    event: React.ChangeEvent<HTMLInputElement>
  ): void {
    const filterName = names.filter((name) => name.nome === event.target.value);

    if (filterName.length > 0) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function handleTurnFalseIsActive(): void {
    setIsActive(false);
  }
  return (
    <MyContext.Provider
      value={{ handleChangeTextLogin, isActive, handleTurnFalseIsActive }}
    >
      {children}
    </MyContext.Provider>
  );
};
