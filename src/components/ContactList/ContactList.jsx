
import PropTypes from 'prop-types';

export const ContactList = ({ onFilterContacts, deleteUser }) => {
  
  return (
      <ul>
        {onFilterContacts.map(contact => (
          <li key={contact.id}>
            <p>{contact.name}</p>
            <p>{contact.number}</p>
            <button onClick={() => deleteUser(contact.id)} type="button">
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }


ContactList.propTypes = {
  onFilterContacts: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.string,
      name: PropTypes.string,
      id: PropTypes.string,
    })
  ),
  deleteUser: PropTypes.func,
};
