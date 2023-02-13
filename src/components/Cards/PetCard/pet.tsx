import router from "next/router";
import React from "react";

import { Ong } from "../../../interfaces/pet";

import Icon from "../../../utils/icons.config";

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
        </div>
        <div className="py-5">
          <p className="uppercase tracking-wide text-sm text-gray-700">
            {ong.name}
          </p>
          <p className="text-3xl text-gray-900 mt-1.5 mb-1.5 text-brand font-bold">
            {pet}
          </p>
          <p className="uppercase tracking-wide text-sm text-gray-700 pt-1 flex items-center justify-between">
            RIO BRANCO, ACRE
            {sex === "Macho" && (
              <Icon.BsGenderMale size={20} color="#17479E" title={sex} />
            )}
            {sex === "Fêmea" && (
              <Icon.BsGenderFemale size={20} color="#f5949b" title={sex} />
            )}
            {sex === "Indefinido" && (
              <Icon.IoMaleFemale size={20} color="gray" title={sex} />
            )}
          </p>
          <button
            className="mt-7 px-4 py-2 bg-brand hover:bg-red-400 text-white text-sm font-medium rounded-md w-full"
            onClick={() => router.push(`/pet/${id}`)}
          >
            Detalhes
          </button>
        </div>
      </div>
    </>
  );
};
