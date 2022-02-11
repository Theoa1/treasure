import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '914fa47351mshcbeab34e2759f48p1a62f3jsnb1fa0e5256e5'
    },
  });
    
  return data;
}