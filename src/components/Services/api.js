import axios from "axios";

export const fetchImages = async (page = 1, query = "", perPage = 6) => {
  const { data } = await axios.get(`https://api.unsplash.com/search/photos`, {
    params: {
      client_id: "opX3W8Ip8Hyt0TXq1DmFYBjehxJfVBBQ6atczi4_zgo",
      query: query,
      page: page,
      per_page: perPage,
    },
  });
  return { images: data.results, totalPages: data.total_pages };
};
