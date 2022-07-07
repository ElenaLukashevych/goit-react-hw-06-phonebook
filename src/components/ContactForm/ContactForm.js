import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from "redux/slice";
import { getContacts } from "redux/selectors";
import s from './ContactForm.module.css';
import { nanoid } from 'nanoid';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  }

 const hanleSubmit = (event) => {
   event.preventDefault();
   
  if (contacts.find(
            contact => contact.name.toLowerCase() === name.toLowerCase()
          )) {
            return alert(`${name} is already in contacts`);
          }
dispatch(
          addContact({
            id: nanoid(),
            name: name,
            number: number,
          })
        );
     reset();
    }
    
   const reset = () => {
     setName('');
     setNumber('')
  }
  
      return (
          
            <form className={s.form} onSubmit={hanleSubmit}>
        <label>
          Name
            <input
              placeholder="Lenka"
              className={s.input}
              type="text"
              name="name"
              value={name}
              onChange={handleInputChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>

          <label>
            Number
            <input
              placeholder="0636909298"
              className={s.input}
              type="tel"
              name="number"
              value={number}
              onChange={handleInputChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>

          <button className={s.button} type="submit">Add contact</button>
            </form>
        )
};

export default ContactForm;