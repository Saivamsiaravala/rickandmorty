import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import type { Data } from "../types/Types";

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        name
        species
        status
        image
        id
      }
    }
  }
`;

export const useGetCharacters = () => {
  const { data, loading, error } = useQuery<Data>(GET_CHARACTERS);
  return { data, loading, error };
};
