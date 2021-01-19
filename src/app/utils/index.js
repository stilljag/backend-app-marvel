/* eslint-disable no-restricted-syntax */
require('dotenv/config');

const apikey = process.env.APIKEY;
const hash = process.env.HASH;
const timestamp = process.env.TIMESTAMP;

const buildMarvelApiRoute = (route, queries) => {
  let url = `${route}?apikey=${apikey}&hash=${hash}&ts=${timestamp}`;

  if (queries) {
    for (const [key, value] of Object.entries(queries)) {
      url += `&${key}=${value}`;
    }
  }

  return url;
};

export default buildMarvelApiRoute;
