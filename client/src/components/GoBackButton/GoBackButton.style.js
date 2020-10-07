import styled from 'styled-components';

export const Button = styled.button`
  background-color: #000000;
  padding: 10px;
  margin: 20px;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  outline: none;
  transition: all 0.2s;

  &:hover {
    opacity: 0.7;
  }

  &:active {
    transition: all 0.1s;
    transform: scale(0.9);
  }
`;
