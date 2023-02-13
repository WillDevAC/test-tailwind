import React, { useContext } from "react";
import { FilterContext } from "../../../contexts/filter.context";

import Icon from "../../../utils/icons.config";

interface ISpecieCard {
  iconName: string;
  title: string;
  id: number;
}

export const SpecieCard: React.FC<ISpecieCard> = ({ iconName, title, id }) => {
  const { handleChangeFilterCard } = useContext(FilterContext);

  return (
    <>
      <div
        className="flex bg-white items-center md:w-96 lg:w-1/5 h-20 rounded-lg gap-4 px-2 cursor-pointer"
        onClick={() => handleChangeFilterCard(title, id)}
      >
        <div className="flex items-center justify-center bg-red-100 p-5 w-20 rounded-lg">
          {iconName === "all" && <Icon.MdPets size={25} color="#ec5161" />}
          {iconName === "cat" && <Icon.FaCat size={25} color="#ec5161" />}
          {iconName === "dog" && <Icon.FaDog size={25} color="#ec5161" />}
        </div>
        <div className="px-1 text-gray-500">{title}</div>
      </div>
    </>
  );
};
