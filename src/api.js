import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID _gijT6MwxVO1y4dyhH2OpRrZArPonb3SQ5SD37XKS7o',
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
