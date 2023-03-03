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
