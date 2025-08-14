import { Link } from "react-router";

const CharactersByHero = ({ alter_ego, characters }) => {
  if (alter_ego === characters) return null;
  return <p>{characters}</p>;
};

export const HeroCard = ({
  id,
  superhero,
  alter_ego,
  characters,
  first_appearance,
}) => {
  const heroImgUrl = `/assets/heroes/${id}.jpg`;

  return (
    <div className="col">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img src={heroImgUrl} alt={superhero} className="card-img" />
          </div>

          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>

              <CharactersByHero alter_ego={alter_ego} characters={characters} />

              <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </p>

              <Link to={`/hero/${id}`}>Mas...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
