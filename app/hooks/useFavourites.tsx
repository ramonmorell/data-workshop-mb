import { useState } from "react";

import useHttpClient from "./useHttpClient";
import URLS from "../constants/urls";
import useLoader from "./useLoader";
import { Loaders } from "../constants/loaders";
import { Project } from "../types/projects";

export interface AddFavouriteProps {
  idUser: number;
  idProject: number;
}

export default function useFavourites() {
  const httpClient = useHttpClient();
  const loader = useLoader();
  const [fetching, setFetching] = useState(false);

  const deleteFavourite = (favouriteId: number) => {
    loader.addLoader(Loaders.FAVOURITES);
    setFetching(true);
    const url = `${URLS.FAVOURITE}/${favouriteId}`;
    return httpClient
      .delete(url)
      .then(() => {})
      .catch((error) => {
        return Promise.reject();
      })
      .finally(() => {
        loader.removeLoader(Loaders.FAVOURITES);
        setFetching(false);
      });
  };

  const addFavourite = (data: AddFavouriteProps) => {
    loader.addLoader(Loaders.PROJECT);
    setFetching(true);
    return httpClient
      .post(URLS.FAVOURITE, data)
      .then((response) => {})
      .catch((error) => {
        return Promise.reject();
      })
      .finally(() => {
        loader.removeLoader(Loaders.FAVOURITES);
        setFetching(false);
      });
  };

  return {
    fetching,
    deleteFavourite,
    addFavourite,
  };
}
