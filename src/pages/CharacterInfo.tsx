import { useParams } from "react-router-dom";
import { useGetCharacter } from "../queries/GetCharacter";

const CharacterInfo = () => {
  const { idFromClick } = useParams();
  const { data, error, loading } = useGetCharacter(idFromClick);
  if (loading) return <>...loading</>;
  if (error) return <>...error</>;
  console.log(data);
  if (data) {
    const { name, gender, id, image, location, species, status } =
      data?.character;
    return (
      <div className="character-info">
        {data && (
          <div key={id}>
            <div className="name">{name}</div>
            <img src={image} alt={name} />
            <div className="gender">{gender}</div>
            <div className="location">{location.name}</div>
            <div className="species">{species}</div>
            <div className="status">{status}</div>
          </div>
        )}
      </div>
    );
  }
};

export default CharacterInfo;
