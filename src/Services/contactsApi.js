import axios from 'axios';

axios.defaults.baseURL = 'https://64f99be84098a7f2fc14b360.mockapi.io/contacts';

export const fetchContacts = () => {
    return axios.get('/contacts');
};

export const addContact = item => {
   return axios.post('/contacts', item);
};

export const deleteContact = id => {
    return axios.delete(`/contacts/${id}`);
};

