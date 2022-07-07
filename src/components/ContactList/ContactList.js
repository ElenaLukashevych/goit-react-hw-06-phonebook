import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from "redux/selectors";


import ContactItem from "components/ContactItem";
import s from './ContactList.module.css';

function ContactList() {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);

    const normalizedFilter = filter.toLowerCase();


     const filteredContacts = contacts.filter(({name}) =>
     name.toLowerCase().includes(normalizedFilter),
    );

    if (filteredContacts) {
         return (
        <ul className={s.list}>
            {filteredContacts.map(({ id, name, number }) => (
                <ContactItem
                    key={id}
                    id={id}
                    name={name}
                    number={number}
                />
           ))} 
            </ul>
        )
    }
   
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
    )}

export default ContactList;