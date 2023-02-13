export interface IPet {
  id: number;
  name: string;
  tag: string;
  description: string;
  age: number;
  hasOwner: boolean;
  lost: boolean;
  active: boolean;
  profilePicture: string;
  deletedAt: any;
  ong: Ong;
  color: Color;
  size: Size;
  race: Race;
  specie: Specie2;
  sex: string;
  weight: any;
  createdAt: string;
  updatedAt: any;
}

export interface Ong {
  createdAt: string;
  updatedAt?: string;
  id: number;
  email: string;
  name: string;
  cpf: string;
  phone: string;
  birthDate: string;
  job: string;
  income: number;
  typeResidence: string;
  freeTime: number;
  childAtHome: boolean;
  petAtHome: boolean;
  age: number;
  sex: string;
  verified: boolean;
  active: boolean;
  profilePicture: any;
  deletedAt: any;
  role: string;
  localTitle: any;
  fullAddress: any;
  description: any;
  cep: any;
  latitude: any;
  longitude: any;
  city: City;
}

export interface City {
  id: number;
  name: string;
  state: State;
}

export interface State {
  id: number;
  name: string;
}

export interface Color {
  id: number;
  colorName: string;
  colorHexadecimal: string;
}

export interface Size {
  id: number;
  sizeName: string;
}

export interface Race {
  id: number;
  raceName: string;
  specie: Specie;
}

export interface Specie {
  id: number;
  specieName: string;
}

export interface Specie2 {
  id: number;
  specieName: string;
}
