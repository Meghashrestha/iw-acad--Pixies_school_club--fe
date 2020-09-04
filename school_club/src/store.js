import { createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {}
const persistConfig = {
    key: 'root',
    storage: storage,
  };
const pReducer = persistReducer(persistConfig, rootReducer);
const middleware = applyMiddleware(thunk);
const store = createStore(pReducer, initialState, composeWithDevTools(middleware));



const persistor = persistStore(store);

export { persistor, store };
