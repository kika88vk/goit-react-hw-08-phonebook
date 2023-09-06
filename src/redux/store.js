import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";

// import storage from 'redux-persist/lib/storage';



// const persistConfig = {
//     key: 'contacts',
//     storage,
// }



export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
    },

})

