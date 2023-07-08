const BASE_URL = 'https://api.themoviedb.org/3';
// const ENDPOINT = '/trending/all/day';
const API_KEY = 'bb37d49c53a672415b33eb59b7e6ce07';

export const fetchData = endpoint => {
  const url = new URL(`${BASE_URL}${endpoint}`);
  url.searchParams.append('api_key', API_KEY);

  return fetch(url).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
};

// import axios from 'axios';
// import Notiflix from 'notiflix';
//
// const BASE_URL = 'https://api.themoviedb.org/3';
// const ENDPOINT = '/trending/all/day';
// const API_KEY = 'bb37d49c53a672415b33eb59b7e6ce07';

// export const getFilms = () => {
//   return fetch(`${BASE_URL}${ENDPOINT}?api_key=${API_KEY}`).then(
//     resp => {
//       if (!resp.ok) {
//         throw new Error(resp.statusText);
//       }

//       return resp.json();
//     }
//   );
// };

// const fetchImages = async (searchText, page) => {
//     const params = new URLSearchParams({
//     key: API_KEY,
//     q: searchText,
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: 'true',
//     per_page: 12,
//     page: page,
//   });

//   try {
//     const response = await axios.get(`${BASE_URL}?${params}`);
//     const { data } = response;

//     return data;
//   } catch (error) {
//     console.error(error);
//     Notiflix.Notify.failure(
//       'An error occurred while fetching images. Please try again later.'
//     );

//     return null;
//   }
// };

// export default getFilms;
