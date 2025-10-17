import { useParams } from "react-router-dom";
import { useGetCharacter } from "../queries/GetCharacter";

const CharacterInfo = () => {
  const { idFromClick } = useParams();
  const { data, error, loading } = useGetCharacter(idFromClick);
  if (loading) return <>...loading</>;
  if (error) return <>...error</>;
  if (data) {
    const { name, gender, id, image, location, species, status } =
      data.character;
    return (
      <div className="character-info">
        <div key={id}>
          <img src={image} alt={name} className="image" />
          <div className="name">{name}</div>
          <div className="gender">Gender: {gender}</div>
          <div className="location">From: {location.name}</div>
          <div className="species">Species: {species}</div>
          <div className="status">status: {status}</div>
        </div>
      </div>
    );
  }
};

export default CharacterInfo;
