// redux global store

import { configureStore , combineReducers} from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const rootreducer = combineReducers({
    user: userReducer,
})

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootreducer)

// code for creating and exporting store using configuarationStore
export const store = configureStore({
    // reducers
    reducer : persistedReducer,

    // middleware
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),

    // dev tools - redux store (present)
    devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);
