import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsOperations';


const contactsSlice = createSlice({
    name: 'contacts', 
    initialState: {
        items: [],
        isLoading: false, 
        error: null, 
    }, 

   extraReducers: {
        [fetchContacts.pending]: (state) => {
            state.isLoading = true
            state.error = ''
        },
        [fetchContacts.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            state.items = payload
        },
        [fetchContacts.rejected]: (state, {payload}) => {
            state.isLoading = false
            state.error = payload
        },
    },
});

export default contactsSlice.reducer;