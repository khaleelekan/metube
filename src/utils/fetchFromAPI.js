import axios from 'axios';



const BASE_URL = 'https://youtube-v31.p.rapidapi.com'
const options = {
  params: {
    part: 'snippet',
    videoId: 'M7FIvfx5J10'
  },
  headers: {
    'X-RapidAPI-Key': '57f062c3e9mshc7f3b282bac97a3p17b51fjsna7c4067e0fbc',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
}