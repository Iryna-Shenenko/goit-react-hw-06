import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, } from "redux-persist";
import contactReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice"
import storage from 'redux-persist/lib/storage';


const rootReducer = combineReducers({
    contacts: contactReducer,
    filters: filtersReducer,
});


const persistConfig = {
    key: 'contacts',
    storage, 
    whitelist: ['items'],
};

const persistedContactsReducer = persistReducer(persistConfig, contactReducer);


 const store = configureStore({
    reducer: {persistedContactsReducer,
        filters: filtersReducer, 
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            },
        }),
    });
export const persistor = persistStore(store);
export default store;