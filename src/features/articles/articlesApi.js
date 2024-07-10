import axios from 'axios';
export const getArticles = async (payload) => {
  try {
    // getting data through api call
    const cards = await axios.get(
      'https://api.lumiplace.io/app.v1/api/getArticles',
      payload
    );
    return cards;
  } catch (error) {
    console.log(error.message);
  }
};
