import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const keyApi = '6d070ee2b82df1d970d23eca62ef69da';

// ===================================================================================
// const options = {
//   method: 'GET',
//   url: 'https://api.themoviedb.org/3/trending/all/day?language=en-US',
//   headers: {
//     accept: 'application/json',
//     Authorization:
//       'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZDA3MGVlMmI4MmRmMWQ5NzBkMjNlY2E2MmVmNjlkYSIsInN1YiI6IjY0OTExN2NmNDJiZjAxMDExZTc1MTQzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S6VKiZqFJ17KU30nJMe8ewgWIwV0rkd-iqWQtxFXFF0',
//   },
// };
//======================================================================================
export class NewApi {
  async getAll(page = 1) {
    try {
      const response = await axios.get(
        `/trending/all/day?language=en-US/&api_key=${keyApi}&page=${page}`
      );
      return response.data;

      // ==============================================================================
      // const response = await axios.request(options);
      // return response;
      // ============================================================================
    } catch (error) {
      console.error(error);
    }
  }

  async getFilmId(id) {
    try {
      const response = await axios.get(
        `/movie/${id}?language=en-US/&api_key=${keyApi}`
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async getCast(id) {
    try {
      const response = await axios.get(
        `/movie/${id}/credits?language=en-US/&api_key=${keyApi}`
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
  async getReviews(id, page = 1) {
    try {
      const response = await axios.get(
        `/movie/${id}/reviews?language=en-US/&api_key=${keyApi}&page=${page}`
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
  async getMovies(name) {
    try {
      const response = await axios.get(
        `/search/movie?query=${name}&include_adult=false&language=en-US/&api_key=${keyApi}&page=1`
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}
