import { useState } from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {Form, Label, Input, Btn} from './ContactForm.styled'
import { addContact } from 'redux/contacts/contactsOperations';
import {getContacts} from 'redux/contacts/contactsSelectors';

const ContactForm = () => {

const [name, setName] = useState('');
const [number, setNumber] = useState('');
const contacts = useSelector(getContacts);
const dispatch = useDispatch();

const handleChange = (e) => {
    const {name, value} = e.currentTarget;
    
    switch (name) {
        case 'name':
            setName(value);
            break;
        
        case 'number':
            setNumber(value);
            break;

        default: return;    
    }
}

const handleSubmit = (e) => {
    e.preventDefault();
        if (contacts.length > 0 && contacts.find((c) => c.name === name)) {
            return alert (`Contact ${name} already exists`);
        }
        dispatch(addContact({name: name, number: number}))
        reset();
    };
    
const reset = () => {
    setName('');
    setNumber('');
}

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Label htmlFor="">
                    Name
                    <Input
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleChange}
                        // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </Label>
                <Label htmlFor="">
                Phone number
                <Input
                    type="tel"
                    name="number"
                    value={number}
                    onChange={handleChange}
                    // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required 
                />
                </Label>
                <Btn type='submit'>Add contact</Btn>     
            </Form>
        </>        
     )
    }

ContactForm.propTypes = {
    onFormSubmit: PropTypes.func,
};

export default ContactForm;