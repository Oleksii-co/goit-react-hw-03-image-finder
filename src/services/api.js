import axios from 'axios';

const API_KEY = '36692460-95aa8d63e830b1b263bde2e89';
const BASE_URL = 'https://pixabay.com/api';

export const fetchImg = async query => {
const {data} = await axios
    .get(
      `${BASE_URL}/?q=${query}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
  return data.hits;
};
