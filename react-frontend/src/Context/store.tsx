
/*
import {configureStore} from "@reduxjs/toolkit";
import loginReducer from "./slices/logSlice.tsx";

export const store = configureStore({
    reducer: {
        isLoggedIn: loginReducer,
    },

});



 */



import {configureStore} from "@reduxjs/toolkit";
import {persistReducer, persistStore} from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./slices/logSlice.tsx"

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: {
        isLoggedIn: persistedReducer,
    }
})

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;