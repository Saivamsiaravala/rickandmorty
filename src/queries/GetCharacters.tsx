import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        name
        species
        status
        image
      }
    }
  }
`;

export const useGetCharacters = () => {
  const { data, loading, error } = useQuery(GET_CHARACTERS);
  return { data, loading, error };
};
