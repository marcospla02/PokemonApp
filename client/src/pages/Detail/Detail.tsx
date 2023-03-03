import { ContainerDetail, Img } from "@/components";
import { pokemonsDetail, useAppDispatch, useAppSelector } from "@/redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const detail = useAppSelector((state) => state.detail);
  const dispatch = useAppDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(pokemonsDetail(id));
  }, []);

  let types = !detail.types.length ? detail.typesApi : detail.types;
  let name = detail.name.charAt(0).toUpperCase() + detail.name.slice(1);

  return (
    <ContainerDetail>
      <Img>
        <img
          src={detail.img}
          alt={`image of pokemon ${detail.name}`}
          height="300px"
          width="400px"
        />
      </Img>
      <div className="info">
        <h1>
          <strong>{name}</strong>
        </h1>
        <p>
          <strong>Attack: {detail.Attack}</strong>
        </p>
        <p>
          <strong>Defense: {detail.Defense}</strong>
        </p>
        <p>
          <strong>Height: {detail.height}</strong>
        </p>

        <p>
          <strong>Life: {detail.life}</strong>
        </p>
        <p>
          <strong>Type:</strong>
        </p>
        {types.length &&
          types.map((t: any) => {
            return <strong> -{t.hasOwnProperty("name") ? t.name : t}</strong>;
          })}
      </div>
    </ContainerDetail>
  );
};

export default Detail;
