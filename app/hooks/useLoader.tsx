import { useCallback } from "react";
import { useDispatch } from "react-redux";

import {
  addLoader as addLoaderAction,
  removeLoader as removeLoaderAction,
  cleanLoader as cleanLoaderAction,
} from "../redux/reducers/appReducer";

export default function UseLoader() {
  const dispatcher = useDispatch();

  const addLoader = useCallback((loader: string) => {
    dispatcher(addLoaderAction(loader));
  }, []);

  const removeLoader = useCallback((loader: string) => {
    dispatcher(removeLoaderAction(loader));
  }, []);

  const cleanLoader = useCallback(() => {
    dispatcher(cleanLoaderAction());
  }, []);

  return {
    addLoader,
    removeLoader,
    cleanLoader,
  };
}
