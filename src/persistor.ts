import { persistStore, Persistor } from "redux-persist";
import { store } from "./store";

export const persistor: Persistor = persistStore(store);
