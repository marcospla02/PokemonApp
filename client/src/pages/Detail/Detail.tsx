import { ContainerDetail, ContainerImg, Img } from "@/components";
import { pokemonsDetail, useAppDispatch, useAppSelector } from "@/redux";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import pokebola from "../../../public/pokebola.gif";

import {
  ProgressBarsAttack,
  ProgressBarsDefense,
  ProgressBarsHeigth,
  ProgressBarsLife,
  ProgressBarsSpeed,
} from "./SliderDetail";

const Detail = () => {
  const detail = useAppSelector((state) => state.detail);
  const [loading, setLoading] = useState<boolean>(true);

  const dispatch = useAppDispatch();

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    dispatch(pokemonsDetail(id));
    if (Object.keys(detail)) setTimeout(() => setLoading(false), 1800);
  }, []);

  let types = !detail?.types.length ? detail.typesApi : detail.types;
  let name = detail.name.charAt(0).toUpperCase() + detail.name.slice(1);

  return (
    <>
      {loading ? (
        <ContainerImg>
          <img src={pokebola} alt="loading.." />
        </ContainerImg>
      ) : (
        <ContainerDetail>
          <a href="/" className="a-detail">
            <ArrowBackIcon />
          </a>
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
            <div className="info-all">
              <p>
                <strong>Attack: {detail.Attack}</strong>
                <ProgressBarsAttack attack={detail.Attack} />
              </p>
              <p>
                <strong>Defense: {detail.Defense}</strong>
                <ProgressBarsDefense defense={detail.Defense} />
              </p>
              <p>
                <strong>Height: {detail.height}</strong>
                <ProgressBarsHeigth heigth={detail.height} />
              </p>
              <p>
                <strong>Speed: {detail.Speed}</strong>
                <ProgressBarsSpeed speed={detail.Speed} />
              </p>
              <p>
                <strong>Life: {detail.life}</strong>
                <ProgressBarsLife life={detail.life} />
              </p>
              <p>
                <strong>Type:</strong>
              </p>
              {types.length &&
                types.map((t: any) => {
                  return (
                    <strong> -{t.hasOwnProperty("name") ? t.name : t}</strong>
                  );
                })}
            </div>
          </div>
        </ContainerDetail>
      )}
    </>
  );
};

export default Detail;
