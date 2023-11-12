import { Div, Ul } from 'components/Helpers/Components.styled';
import PhonebookFilter from './PhonebookFilter';

export const PhonebookList = ({ contacts, filter, handleChange }) => {
  return (
    <Div>
      <PhonebookFilter filter={filter} handleChange={handleChange} />
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
              </li>
            );
          })}
      </Ul>
    </Div>
  );
};
