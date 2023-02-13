import router from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/auth.context";
import { TUser } from "../../../interfaces/user";
import {ModalLogout} from "../../Modals/";

export const UserOptions: React.FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [user, setUser] = useState<TUser>({} as TUser);
  const { isAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthenticated) {
      const credentials = localStorage.getItem("nextauth-credentials");
      const user: TUser = JSON.parse(credentials || "{}");
      setUser(user);
    }
  }, []);

  return (
    <div className="flex flex-col absolute bg-white p-5 top-20 right-5 rounded shadow absolute h-auto w-auto bg-white">
      <h1 className="text-xl font-bold">Olá {user.name}.</h1>
      <span className="text-gray-500">Que bom ver você novamente</span>
      {user.verified !== true ? (
        //not verified.
        <>
          <div className="mt-5 mb-5">
            <p className="text-gray-600">Sua conta não está verificada.</p>
            <div className="bg-gray-400 w-64 h-3 rounded-lg mt-2 overflow-hidden">
              <div className="bg-green-600 w-3/4 h-full rounded-lg shadow-md"></div>
            </div>
          </div>
          <button
            className="bg-brand text-white py-3 px-8 mt-4 rounded text-sm font-semibold hover:bg-opacity-75"
            onClick={() => router.replace(`/verify-account/${user.id}`)}
          >
            Completar conta
          </button>
        </>
      ) : (
        //verified.
        <>
          <div className="mt-5 mb-5">
            <p className="text-gray-600">Sua conta está verificada.</p>
            <div className="bg-gray-400 w-64 h-3 rounded-lg mt-2 overflow-hidden">
              <div className="bg-green-600 w-full h-full rounded-lg shadow-md"></div>
            </div>
          </div>
          <button
            className="bg-brand text-white py-3 px-8 mt-4 rounded text-sm font-semibold hover:bg-opacity-75"
            onClick={() => router.replace(`/my-account`)}
          >
            Minha conta
          </button>
        </>
      )}

      <ModalLogout openModal={openModal} setModalOpen={setOpenModal}/>
      <button className="pt-5" onClick={() => setOpenModal(true)}>Desconectar</button>
    </div>
  );
};
