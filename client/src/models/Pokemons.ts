export interface Pokemons {
  id: string;
  idPoke: number;
  name: string;
  life: number;
  height: string;
  weight: string;
  Attack: number;
  Defense: number;
  Speed: number;
  img: string;
  stats?: Stats[];
  typesApi: string[];
  types: any;
}

export interface Type {
  name: string;
}

export interface Stats {
  base_stat: number;
}

export const EmptyStates: Pokemons = {
  id: "",
  idPoke: 0,
  name: "",
  life: 0,
  height: "",
  weight: "",
  Attack: 0,
  Defense: 0,
  Speed: 0,
  img: "",
  typesApi: [],
  types: [],
};

export interface ActionTypes {
  payload: string;
  type: string;
}
