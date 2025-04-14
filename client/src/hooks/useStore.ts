import { useContext } from "react";
import { CounterContext } from "../store/store";

export const useStore = () => {
  return useContext(CounterContext);
};
