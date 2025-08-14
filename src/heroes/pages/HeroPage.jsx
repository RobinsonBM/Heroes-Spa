import { getHeroById } from "../helpers";
import { Navigate, useParams } from "react-router";

export const HeroPage = () => {
  const { id } = useParams();
  const hero = getHeroById(id);

  if (!hero) return <Navigate to="/marvel" />;

  return <h1>HeroPage: {hero?.superhero}</h1>;
};
