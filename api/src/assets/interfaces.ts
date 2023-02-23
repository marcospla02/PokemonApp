export interface SchemaPokemon {
  id: number;
  idPoke: number;
  name: string;
  life: number;
  height: number;
  weight: number;
  Attack: number;
  Defense: number;
  Speed: number;
  img: string;
  stats: Stats[];
  sprites: any;
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

export interface Poke {
  name: string;
  url: string;
}

export interface Body {
  name: string;
  life: number;
  height: number;
  weight: number;
  Attack: number;
  Defense: number;
  Speed: number;
  img: string;
  types: string[];
}
