import PropTypes from 'prop-types';
import {Contact, Btn, Container} from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/contacts/contactsOperations';
import { getFilteredContacts } from 'redux/contacts/contactsSelectors';
import { useEffect } from 'react';

const ContactList = () => {

    const dispatch = useDispatch();
    const filteredContacts = useSelector(getFilteredContacts);
    // const allContacts = useSelector(getContacts);

    const onContactDelete = contactId => {
        dispatch(deleteContact(contactId))
    };

    useEffect(() => {
        dispatch(fetchContacts())
    },[dispatch])

    return (

       <Container>
            <h2>Contacts</h2>
            {filteredContacts.length > 0 && filteredContacts.map(({id, name, number}) => {
            return (
                <Contact key={id}>
                    {name}: {number}
                    <Btn 
                    type="button"
                    name="delete"
                    onClick={() => onContactDelete(id)}>Delete</Btn>
                </Contact> )
            })}
        </Container>
    )  
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          name: PropTypes.string,
          number: PropTypes.string,
        })
      ),
      deleteContact: PropTypes.func,
    };

export default ContactList;