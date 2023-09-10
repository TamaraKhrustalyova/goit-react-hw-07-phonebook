import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsOperations';

const handleFetchFulfilled = (state, {payload}) => {
        state.isLoading = false;
        state.items = payload;
        state.error = '';
};

const handleAddFulfilled = (state, {payload}) => {
        state.items = [...state.items, payload]
        state.isLoading = false;
        state.error = '';
};

const handleDeleteFulfilled = (state, {payload}) => {
        state.items = state.items.filter(c => c.id !== payload.id);
        state.isLoading = false;
        state.error = '';
};

const handlePending = state => {
    state.isLoading = true;
}

const handleRejected = (state, {error}) => {
        state.isLoading = false
        state.error = error.message
}

const contactsSlice = createSlice({
    name: 'contacts', 
    initialState: {
        items: [],
        isLoading: false, 
        error: null, 
    }, 

   extraReducers: builder => {
    builder
        .addCase(fetchContacts.pending, handlePending)
        .addCase(fetchContacts.fulfilled, handleFetchFulfilled)
        .addCase(fetchContacts.rejected, handleRejected)
        
        .addCase(addContact.pending, handlePending)
        .addCase(addContact.fulfilled, handleAddFulfilled)
        .addCase(addContact.rejected, handlePending)

        .addCase(deleteContact.pending, handlePending)
        .addCase(deleteContact.fulfilled, handleDeleteFulfilled)
        .addCase(deleteContact.rejected, handlePending)

        // [fetchContacts.pending]: (state) => {
        //     state.isLoading = true
            
        // },
        // [fetchContacts.fulfilled]: (state, {payload}) => {
        //     state.isLoading = false
        //     state.items = payload
        // },
        // [fetchContacts.rejected]: (state, {error}) => {
        //     state.isLoading = false
        //     state.error = error.message
        // },

        // [addContact.pending]: (state) => {
        //     state.isLoading = true
           
        // },
        // [addContact.fulfilled]: (state, {payload}) => {
        //     state.items = [...state.items, payload]
        //     state.isLoading = false
        // },
        // [addContact.rejected]: (state) => {
        //     state.isLoading = false
        //     
        // },

        // [deleteContact.pending]: (state) => {
        //     state.isLoading = true 
        //     state.error = '';  
        // },
        // [deleteContact.fulfilled]: (state, {payload}) => {
        //     state.items = state.items.filter(c => c.id !== payload.id)
        //     state.isLoading = false
        //     state.error = ''
            
        // },
        // [deleteContact.rejected]: (state) => {
        //     state.isLoading = false
        // },

    },
});

export default contactsSlice.reducer;