import { Link } from "react-router-dom";
import { useGetCharacters } from "../queries/GetCharacters";
import type { Character } from "../types/Types";

const Characters = () => {
  const { data, loading, error } = useGetCharacters();
  console.log(data);
  if (loading) return <div className="loading">Loading....</div>;
  if (error) return <div className="error">Error....</div>;

  return (
    <div className="characters">
      {data &&
        data.characters.results.map((character: Character, index: number) => {
          return (
            <Link to={`${character.id}`} className="character" key={index}>
              <img
                src={character.image}
                alt={character.name}
                className="image"
              />
              <div className="name">{character.name}</div>
            </Link>
          );
        })}
    </div>
  );
};

export default Characters;
