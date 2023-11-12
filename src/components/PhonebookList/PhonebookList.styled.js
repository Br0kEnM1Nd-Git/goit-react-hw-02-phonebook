import styled from 'styled-components';

const FilterForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 12px;
  & > label {
    font-size: 36px;
    width: 300px;
  }
  & > input {
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    width: 250px;
    border: 0.1px solid grey;
    &:focus-visible {
      outline: 0;
      background-color: rgba(0, 0, 155, 0.1);
    }
  }
`;

export { FilterForm };
