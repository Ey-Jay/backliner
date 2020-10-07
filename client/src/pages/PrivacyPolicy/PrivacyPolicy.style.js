import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  margin: 40px auto;
  color: ${({ theme }) => theme.color};

  a {
    color: ${({ theme }) => theme.primary};
  }
`;

export const BackButton = styled.button`
  background-color: ${({ theme }) => theme.backgroundColorLight};
  padding: 10px;
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
