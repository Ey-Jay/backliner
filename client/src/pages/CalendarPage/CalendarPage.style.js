import styled from 'styled-components';

export const Container = styled.div``;

export const CalendarToolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavigationButton = styled.button`
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.color};
  border: none;
  padding: 10px 15px;
  margin: 2px;
  cursor: pointer;
  border-radius: 5px;
  outline: none;
  text-transform: uppercase;
  transition: all 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.secondaryDark};
  }

  &:active  {
    transition: all 0.1s;
    transform: scale(0.9);
  }
`;
