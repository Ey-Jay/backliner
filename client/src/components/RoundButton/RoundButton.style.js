import styled from 'styled-components';

export const Button = styled.button`
  height: 45px;
  width: 45px;
  background-color: rgba(247, 247, 250, 0.07);
  color: ${({ color, theme }) =>
    color === 'secondary' ? theme.secondary : 'inherit'};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50%;
  position: relative;
  transition: all 0.2s;
  outline: none;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  &:focus {
    border: 3px solid ${({ theme }) => theme.secondary};
  }

  &:active {
    transition: all 0.1s;
    transform: scale(0.9);
  }
`;
