import { useState } from "react";

import useHttpClient from "./useHttpClient";
import URLS from "../constants/urls";
import useLoader from "./useLoader";
import { Loaders } from "../constants/loaders";
import { Project } from "../types/projects";

export interface AddProjectProps {
  name: string;
  description: string;
}

export default function useProject(searchValueProjects?: string) {
  const httpClient = useHttpClient();
  const loader = useLoader();

  const [data, setData] = useState<Project[]>();
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState(false);

  const getProjects = () => {
    loader.addLoader(Loaders.PROJECT);
    setFetching(true);
    setError(false);
    const url = searchValueProjects
      ? `${URLS.PROJECTS}?name=${searchValueProjects}`
      : URLS.PROJECTS;
    return httpClient
      .get(url)
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        setError(true);
        return Promise.reject();
      })
      .finally(() => {
        loader.removeLoader(Loaders.PROJECT);
        setFetching(false);
      });
  };

  const getProjectsFavourites = () => {
    loader.addLoader(Loaders.PROJECT);
    setFetching(true);
    setError(false);
    return httpClient
      .get(URLS.PROJECTS_FAVOURITES)
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        setError(true);
        return Promise.reject();
      })
      .finally(() => {
        loader.removeLoader(Loaders.PROJECT);
        setFetching(false);
      });
  };

  const deleteProject = (value: string) => {
    loader.addLoader(Loaders.PROJECT);
    setFetching(true);
    setError(false);
    const url = `${URLS.PROJECT}/${value}`;
    return httpClient
      .delete(url)
      .then(() => {
        getProjects();
      })
      .catch((error) => {
        setError(true);
        return Promise.reject();
      })
      .finally(() => {
        loader.removeLoader(Loaders.PROJECT);
        setFetching(false);
      });
  };

  const addProject = (data: AddProjectProps) => {
    loader.addLoader(Loaders.PROJECT);
    setFetching(true);
    setError(false);
    return httpClient
      .post(URLS.PROJECT, data)
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        setError(true);
        return Promise.reject();
      })
      .finally(() => {
        loader.removeLoader(Loaders.PROJECT);
        setFetching(false);
      });
  };

  return {
    data,
    error,
    fetching,
    getProjects,
    getProjectsFavourites,
    deleteProject,
    addProject,
  };
}
