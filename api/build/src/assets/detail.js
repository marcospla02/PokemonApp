"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function detail() {
    const poke = pokemons.data;
    const infoPoke = {
        name: poke.name,
        life: poke.life,
        height: poke.height,
        weight: poke.weight,
        Attack: poke.stats[1].base_stat,
        Defense: poke.stats[2].base_stat,
        Speed: poke.stats[5].base_stat,
        img: poke.sprites.versions["generation-v"]["black-white"].animated
            .front_default,
    };
    return infoPoke;
}
exports.default = detail;
