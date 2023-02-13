import React from "react";

import { Ong } from "../../../interfaces/pet";

interface IPetCard {
  id: string | number;
  ong: Ong;
  profilePicture: string;
  pet: string;
  sex: string;
}

export const PetCard: React.FC<IPetCard> = ({
  id,
  ong,
  profilePicture,
  pet,
  sex,
}) => {
  return (
    <>
      <div className="flex flex-col p-2 h-96 bg-white border-2 rounded-md">
        <div className="w-full h-2/4 relative">
          <img
            src={profilePicture}
            alt={pet}
            className="w-full h-full object-cover object-center rounded-md"
          />
          <div className="absolute top-0 right-0 p-2 z-20 flex justify-between">
            <div className="inline-flex items-center justify-center w-8 h-8 p-2 rounded-full bg-white shadow-sm">
              <img src="/fogo.svg" />
            </div>
          </div>
        </div>
        <div className="py-5">
          <p className="uppercase tracking-wide text-sm text-gray-700">
            { ong.name }
          </p>
          <p className="text-3xl text-gray-900 mt-1.5 mb-1.5 text-brand font-bold">
            {pet}
          </p>
          <p className="uppercase tracking-wide text-sm text-gray-700 pt-1 flex items-center justify-between">
            RIO BRANCO, ACRE
            <h1>{sex}</h1>
          </p>
          <button className="mt-7 px-4 py-2 bg-brand hover:bg-red-400 text-white text-sm font-medium rounded-md w-full">
            Detalhes
          </button>
        </div>
      </div>
    </>
  );
};
