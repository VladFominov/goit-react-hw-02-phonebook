import {Li} from './ContactList.styled'
const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {' '}
      {contacts.map(({ id, name, number }) => {
        return (
          <Li key={id}>
            {' '}
            {name}: {number}
            <button type="button" onClick={() => onDelete(id)}>
              Delete
            </button>
          </Li>
        );
      })}
    </ul>
  );
};

export default ContactList;
