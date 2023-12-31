import {createSlice} from '@reduxjs/toolkit';

const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        filterContacts: (_, { payload }) => 
            payload,   
    },
});

export const {filterContacts} = filterSlice.actions;
export default filterSlice.reducer;