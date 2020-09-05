const BASE = "http://192.168.88.204"; // Server data-workshop-be
//const PORT_API = "8762/api"; // Zuul server data-workshop-be
const PORT_API = "8100"; // Backend server data-workshop-be

const URLS = {
  PROJECT: `${BASE}:${PORT_API}/project`,
  PROJECTS: `${BASE}:${PORT_API}/projects`,
  PROJECTS_FAVOURITES: `${BASE}:${PORT_API}/projectsFavourites`,
  FAVOURITE: `${BASE}:${PORT_API}/favourite`,
};

export default URLS;
