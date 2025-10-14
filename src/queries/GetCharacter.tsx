import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import type { CharacterInfoType } from "../types/Types";

const GET_CHARACTER = gql`
  query GET_CHARACTER($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species

      gender
      location {
        id
        name
      }
      image
    }
  }
`;

export const useGetCharacter = (id: string | unknown) => {
  const { loading, data, error } = useQuery<CharacterInfoType>(GET_CHARACTER, {
    variables: {
      id: id,
    },
  });

  return { loading, error, data };
};
