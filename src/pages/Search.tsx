import { useState } from "react";
import { gql } from "@apollo/client";
import { useLazyQuery } from "@apollo/client/react";
import type { SearchCharacterType } from "../types/Types";
import { useNavigate } from "react-router-dom";
const SEARCH_CHARACTER = gql`
  query SearchCharacter($name: String!) {
    characters(filter: { name: $name }) {
      results {
        name
        image
        gender
        id
        location {
          name
        }
      }
    }
  }
`;
const Search = () => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const [handleSearch, { data, loading, error, called }] =
    useLazyQuery<SearchCharacterType>(SEARCH_CHARACTER);

  const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSearch({
      variables: { name: searchInput },
    });
  };

  return (
    <div className="search">
      <form onSubmit={(e) => formHandler(e)} className="form">
        <input
          type="text"
          name={searchInput}
          id=""
          onChange={(e) => setSearchInput(e.target.value)}
          className="input"
        />
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
      <div className="results">
        {called ? (
          <>
            {error ? (
              <div className="error">Error fetching the data</div>
            ) : (
              <>
                {loading ? (
                  <div className="spinner"></div>
                ) : (
                  <>
                    {data?.characters.results.length ? (
                      <div className="characters">
                        {data.characters.results.map((character) => {
                          const { id, name, gender, image, location } =
                            character;
                          return (
                            <button
                              onClick={() => navigate(`/${id}`)}
                              className="character"
                              key={id}
                            >
                              <img src={image} alt={name} className="image" />
                              <div className="name">{name}</div>
                              <div className="name">{gender}</div>
                              <div className="name">{location.name}</div>
                            </button>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="no-results">No Results</div>
                    )}
                  </>
                )}
              </>
            )}
          </>
        ) : (
          <div className="search-for-results">Search for results</div>
        )}
      </div>
    </div>
  );
};

export default Search;

//  {called ? (
//           <>
//             {data?.characters.results.length ? (

//             ) :  loading ? (
//               <div className="spinner"></div>
//             ) : !error ? (
//               <div className="no-results">No Results</div>
//             ) : (
//               <div className="error">Error</div>
//             )
//         )}
//           </>
//         ) : (
//           <div className="search-for-results">Search for Results</div>
//         )}
