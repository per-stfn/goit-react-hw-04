import axios from 'axios';

const API = {
  BASE: 'https://api.unsplash.com/',
  SEARCH: 'search/photos',
  ACCESS_KEY: 'opX3W8Ip8Hyt0TXq1DmFYBjehxJfVBBQ6atczi4_zgo',
};

axios.defaults.baseURL = API.BASE;

export const getImages = async (query, page, signal) => {
  const params = {
    query,
    client_id: API.ACCESS_KEY,
    per_page: 12,
    page,
    orientation: 'landscape',
  };
  const response = await axios.get(API.SEARCH, { params, signal });
  const results = response.data?.results ?? [];
  const newImages = results.map((image) => {
    return {
      alt: image.alt_description,
      blurHash: image.blur_hash,
      color: image.color,
      small: image.urls.small,
      regular: image.urls.regular,
      id: image.id,
    };
  });
  const total_pages = response.data?.total_pages;
  return [newImages, total_pages];
};
