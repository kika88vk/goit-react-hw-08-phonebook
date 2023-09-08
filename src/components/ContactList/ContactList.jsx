import { ContactListItem } from './ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import {
  // selectFilteredContacts,
  selectContacts,
  selectFilterList,
} from 'redux/selectors';
import css from './ContactList.module.css';

export const ContactList = () => {
  // const visibleContacts = useSelector(selectFilteredContacts);
  const contacts = useSelector(selectContacts);
  const filterList = useSelector(selectFilterList);

  const getFilteredContacts = () => {
    let normalizedFilter = filterList.toLowerCase();
    let filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return filteredContacts;
  };

  const visibleContacts = getFilteredContacts();
  return (
    <ul className={css.contactList}>
      {visibleContacts.map(contact => (
        <ContactListItem
          key={contact.id}
          name={contact.name}
          phone={contact.number}
          id={contact.id}
        />
      ))}
    </ul>
  );
};
