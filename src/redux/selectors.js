import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts.contacts;

export const selectFilterList = state => state.filter.filter;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

// const getFilteredContacts = () => {
//     let normalizedFilter = filterList.toLowerCase();
//     let filteredContacts = contacts.filter(contact =>
//         contact.name.toLowerCase().includes(normalizedFilter)
//     );
//     return filteredContacts;
// };

export const selectFilteredContacts = createSelector(
    [selectFilterList, selectContacts],
    (filterList, contacts) => {
        return contacts.filter(contact => contact.name.toLowerCase().includes(filterList.toLowerCase()));
    }
);

// export const selectFilteredContacts = state => {
//     const contacts = selectContacts(state);
//     const filterList = selectFilterList(state);

//     return contacts.filter(contact => contact.name.toLowerCase().includes(filterList.toLowerCase()))

// }