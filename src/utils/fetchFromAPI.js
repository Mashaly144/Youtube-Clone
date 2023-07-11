import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  url: BASE_URL,
  params: { part: 'snippet', videoId: 'M7FIvfx5J10' },
  headers: {
    'X-RapidAPI-Key': "b4462a0833msh99e6bde36d24bcap1727a9jsnd94363328df8",
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
