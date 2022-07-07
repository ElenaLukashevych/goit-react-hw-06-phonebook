import PropTypes from 'prop-types';
import s from './ContactItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContacts } from "redux/slice";

function ContactItem({ name, number, id }) {
        const dispatch = useDispatch();

    return (
        <li className={s.item}><p>{ name }: { number }</p> <button className={s.button} onClick={() => dispatch(deleteContacts(id))} type="button">Delete</button></li>
    )
    
}

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
}

export default ContactItem;