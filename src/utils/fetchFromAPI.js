import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': '1d617f055cmsh9c60df7e5b89025p1cb4a0jsn0e86aaf3033d',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};