import { useParams } from "react-router-dom";

const CharacterInfo = () => {
  const { id } = useParams();
  return <div>CharacterInfo: {id} </div>;
};

export default CharacterInfo;
