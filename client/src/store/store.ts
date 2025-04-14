import { createContext } from "react";
import { UiStore } from "./uiStore";

interface Store {
  uiStore: UiStore;
}
export const store: Store = {
  uiStore: new UiStore(),
};
export const CounterContext = createContext(store);
