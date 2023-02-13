export type TUser = {
  id: number;
  email: string;
  name: string;
  cpf: string;
  phone: string;
  birthDate: undefined;
  job: undefined;
  address: Address;
  income: undefined;
  typeResidence: undefined;
  freeTime: undefined;
  childAtHome: undefined;
  petAtHome: undefined;
  age: undefined;
  sex: string;
  verified: boolean;
  active: boolean;
  profilePicture: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: undefined;
  role: string;
  enabled: boolean;
  accountNonExpired: boolean;
  accountNonLocked: boolean;
  credentialsNonExpired: boolean;
  username: string;
  authorities: Authority[];
};

export interface Address {
  id: number;
  title: undefined;
  fullAddress: string;
  description: undefined;
  cep: string;
  latitude: number;
  longitude: number;
}

export interface Authority {
  authority: string;
}
