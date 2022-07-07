import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    filter: ''
}

export const contactsSlise = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
    addContact(state, action) {
                 state.items.push(action.payload);
        },
    deleteContacts(state, action) {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
        },
    filterContact(state, action) {
              state.filter = action.payload;
    }
    }
});

export const { addContact, deleteContacts, filterContact } = contactsSlise.actions;