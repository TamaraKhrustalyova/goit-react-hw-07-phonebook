export const getContacts = store => store.contacts.items;

export const getFilteredContacts = store => {
    const {filter, contacts} = store;

    if(!filter) {
        return contacts.items;
    }

    const filteredContacts = contacts.items.filter(
        ({name}) => 
        name.toLowerCase().includes(filter.toLowerCase())
        );

        return filteredContacts;
};