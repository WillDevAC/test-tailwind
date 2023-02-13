import React, { useContext } from "react";
import { FilterContext } from "../../../contexts/filter.context";

import { Size } from "../../../interfaces/categories";

interface IPetFilterCard {
  title: "Porte" | "Sexo";
  options?: string[] | Size[];
}

export const FilterCard: React.FC<IPetFilterCard> = ({ title, options }) => {
  const { handleChangeFilterCheckbox } = useContext(FilterContext);

  return (
    <div className="flex flex-col">
      <div className="flex w-full items-center bg-brand text-white h-10 px-3">
        {title}
      </div>
      <div className="flex flex-col px-3 gap-5 bg-white">
      <div className="flex items-center gap-2"></div>
        {title === "Porte"
          ? (options as Size[]).map((res, key) => (
              <div className="flex items-center gap-2 pt-1" key={key}>
                <input
                  type="checkbox"
                  className="w-4 h-4 accent-brand"
                  onClick={() => handleChangeFilterCheckbox(res)}
                />
                {res.sizeName}
              </div>
            ))
          : (options as string[]).map((res, key) => (
              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  className="w-4 h-4 accent-brand"
                  onClick={() => handleChangeFilterCheckbox(res)}
                />
                {res}
              </div>
            ))}
          <div className="flex items-center gap-2"></div>
      </div>
    </div>
  );
};
