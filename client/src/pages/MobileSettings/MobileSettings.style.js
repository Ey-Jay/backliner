import styled from 'styled-components';

export const Container = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

  & > * + * {
    margin-top: 10px;
  }
`;

export const Item = styled.li`
  background-color: rgba(255, 255, 255, 0.07);
  margin-left: 40px;
  margin-right: 40px;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.7rem;

  &:active {
    background-color: rgba(255, 255, 255, 0.14);
  }
`;

export const Policy = styled.div`
  color: ${({ theme }) => theme.secondaryDark};
  display: flex;
  justify-content: center;
  margin-top: 20px;
  cursor: pointer;
`;
