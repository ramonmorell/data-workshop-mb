const BASE = "http://192.168.88.204"; // Server data-workshop-be
const PORT = "8762"; // Zuul server data-workshop-be

const URLS = {
  PROJECT: `${BASE}:${PORT}/api/project`,
  PROJECTS: `${BASE}:${PORT}/api/projects`,
  FAVOURITE: `${BASE}:${PORT}/api/favourite`,
};

export default URLS;
