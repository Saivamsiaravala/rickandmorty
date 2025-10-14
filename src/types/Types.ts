export type Character = {
  name: string;
  species: string;
  image: string;
  id: string;
  status: string;
};

export type Data = {
  characters: {
    results: Character[];
  };
};

export type CharacterInfoType = {
  character: {
    id: string;
    name: string;
    status: string;
    species: string;
    gender: string;
    location: { id: string; name: string };
    image: string;
  };
};
