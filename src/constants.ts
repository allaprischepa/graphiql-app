export const API_URL = 'https://rickandmortyapi.com/graphql';

export const QUERY_EXAMPLE = `

  query Characters {
    characters {
        results {
            name
        }
    }
  }
`;
