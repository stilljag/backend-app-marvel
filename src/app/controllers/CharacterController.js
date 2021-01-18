import apiMarvel from '../services/apiMarvel';

const hash =
  '?apikey=07f05d67192c439bf8203269fc153fdd&hash=a2110823d4049282bfbe666bd8e79fff&ts=1609890812920';
class CharIdController {
  async show(request, response) {
    try {
      const { offset } = request.params;
      const result = await apiMarvel.get(
        `/characters${hash}&limit=100&offset=${offset}`
      );

      return response.json({
        characters: result.data.data.results,
        total: result.data.data.total,
      });
    } catch (error) {
      return response.status(error.status || 400).json(error);
    }
  }

  async index(request, response) {
    try {
      const { nameStartsWith } = request.params;

      const { data } = await apiMarvel.get(`/characters${hash}`, {
        params: { nameStartsWith: `${nameStartsWith}` },
      });

      return response.json({
        data: data.data.results,
      });
    } catch (error) {
      return response.status(error.status || 400).json(error);
    }
  }
}

export default new CharIdController();
