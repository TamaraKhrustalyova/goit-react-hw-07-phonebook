import { createAsyncThunk  } from '@reduxjs/toolkit';
// import * as contactsAPI from 'Services/contactsApi';
import axios from 'axios';

axios.defaults.baseURL = 'https://64f99be84098a7f2fc14b360.mockapi.io/contacts';

// export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
//         const {data} = await contactsAPI.fetchContacts();
//         return data;
// });

// export const addContact = createAsyncThunk('contacts/addContact', async (contact) => {
//     const {data} = await contactsAPI.addContact(contact);
//     return data;
// });

// export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id) => {
//     const {data} = await contactsAPI.deleteContact(id);
//     return data;
// });

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
    const {data} = await axios.get('/contacts');
    // return data
    console.log(data)
});

export const addContact = createAsyncThunk('contacts/addContact', async (item) => {
    const {data} = await axios.post('/contacts', item);
    return data;
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id) => {
    const {data} = await axios.delete(`/contacts/${id}`);
    return data;
});