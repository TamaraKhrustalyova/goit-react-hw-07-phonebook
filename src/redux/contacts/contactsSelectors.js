export const getContacts = store => store.contacts;

export const getFilteredContacts = store => {
    const {filter, contacts} = store;

    if(!filter) {
        return contacts;
    }

    const filteredContacts = contacts.filter(
        ({name}) => 
        name.toLowerCase().includes(filter.toLowerCase())
        );

        return filteredContacts;
};