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
    key: 'root',
    storage, 
    blacklist: ['filters']
};

const persistedContactsReducer = persistReducer(persistConfig, rootReducer);


 const store = configureStore({
    reducer: persistedContactsReducer,
        
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            },
        }),
    });
export const persistor = persistStore(store);
export default store;