import ContactItem from 'components/ListItem/ListItem';
import { List } from './ContactList.styled';
import { selectVisibleContacts } from '../../redux/selectors';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  console.log(visibleContacts);
  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => {
        return <ContactItem key={id} id={id} name={name} number={number} />;
      })}
    </List>
  );
};
