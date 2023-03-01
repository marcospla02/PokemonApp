export interface Pokemons {
  id: number;
  idPoke: number;
  name: string;
  life: number;
  height: string;
  weight: string;
  Attack: number;
  Defense: number;
  Speed: number;
  img: string;
  stats: Stats[];
  typesApi: Type[];
  types: Type[];
}

export interface Type {
  type: {
    name: string;
  };
}

export interface Stats {
  base_stat: number;
}
