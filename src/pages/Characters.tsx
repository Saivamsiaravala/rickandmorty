import { useGetCharacters } from "../queries/GetCharacters";

const Characters = () => {
  const { data, loading, error } = useGetCharacters();
  console.log(data);
  if (loading) return <div className="loading">Loading....</div>;
  if (error) return <div className="error">Error....</div>;

  return (
    <div className="characters">
      {data.characters.results.map((character, index) => {
        return (
          <div className="character" key={index}>
            <div className="name">{character.name}</div>
            <img src={character.image} alt={character.name} className="image" />
          </div>
        );
      })}
    </div>
  );
};

export default Characters;
