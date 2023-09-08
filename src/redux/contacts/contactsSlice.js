import { createSlice } from '@reduxjs/toolkit';

import { fetchContacts, fetchDeleteContact, fetchAddContact } from './operations';

const initialState = {
    contacts: [],
    isLoading: false,
    error: null,
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            // ------------Fetch contacts-------------------
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.contacts = action.payload;
                state.error = null;
            })
            //    ----------Delete contact------------

            .addCase(fetchDeleteContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.contacts = state.contacts.filter(contact => contact.id !== action.payload.id);
                state.error = null;
            })
            //    -------------Add contact----------------

            .addCase(fetchAddContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.contacts.unshift(action.payload);
                state.error = null;
            })

            .addMatcher(
                action => action.type.endsWith('/pending'),
                state => {
                    state.isLoading = true;
                    state.error = null;
                }
            )
            .addMatcher(
                action => action.type.endsWith('/rejected'),
                (state, action) => {
                    state.isLoading = false;
                    state.error = action.payload;
                }
            )

    }
});

export const { formAddContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;