import { CardFavorite, CardPokemon, ContainerImgFav } from "@/components";
import { Pokemons } from "@/models";
import { getUserId, useAppDispatch, useAppSelector } from "@/redux";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import sadPicachu from "../../sad-pikachu.gif";

const Favorites = () => {
  const Favorites = useAppSelector((state) => state.favorites);
  const { isAuthenticated, user } = useAuth0();
  const userdb = useAppSelector((state) => state.users);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isAuthenticated)
      dispatch(getUserId(userdb.find((u) => u.id === user?.email)));
  }, [isAuthenticated]);

  return (
    <CardFavorite>
      {Favorites.length ? (
        Favorites.map((poke: Pokemons) => {
          return (
            <div key={poke.id}>
              <CardPokemon
                key={poke.id}
                id={poke.id}
                idPoke={poke.idPoke}
                name={poke.name}
                life={poke.life}
                height={poke.height}
                weight={poke.weight}
                Attack={poke.Attack}
                Defense={poke.Defense}
                Speed={poke.Speed}
                img={poke.img}
                stats={[]}
                typesApi={poke.typesApi}
                types={poke.types?.map((t: any) => {
                  return t;
                })}
              />
            </div>
          );
        })
      ) : (
        <ContainerImgFav>
          <div className="h1">
            <h1>You don´t selected favorites</h1>
          </div>
          <img
            src={sadPicachu}
            alt="sad picachu"
            height="300px"
            width="400px"
          />
        </ContainerImgFav>
      )}
    </CardFavorite>
  );
};

export default Favorites;
