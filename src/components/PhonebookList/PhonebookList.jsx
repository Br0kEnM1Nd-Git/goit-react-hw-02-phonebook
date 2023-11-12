import { Ul } from 'components/Helpers/Components.styled';

export const PhonebookList = ({ contacts, filter, deleteContact }) => {
  return (
    <Ul>
      {contacts
        .filter(el => {
          if (filter) {
            return (
              el.name.toLowerCase().includes(filter.toLowerCase()) ||
              el.number.toLowerCase().includes(filter.toLowerCase())
            );
          }
          return true;
        })
        .map(el => {
          return (
            <li key={el.id}>
              <span>
                {el.name}: {el.number}
              </span>
              <button onClick={() => deleteContact(el.id)}>Delete</button>
            </li>
          );
        })}
    </Ul>
  );
};
