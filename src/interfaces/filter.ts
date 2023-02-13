import { Size } from "./categories";

export interface IFilterProps {
  id: number;
}

export interface IFilter {
  specie: IFilterProps[];
  size: IFilterProps[];
  sex: string[];
}

export interface FilterContextType {
  selectedOptions: IFilter;
  setSelectedOptions: React.Dispatch<React.SetStateAction<IFilter>>;
  handleChangeFilterCheckbox: (value: string | Size) => void;
  handleChangeFilterCard: (cardName: string, id: number) => void;
}
