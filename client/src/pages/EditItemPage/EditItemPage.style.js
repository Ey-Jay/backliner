import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  margin: 80px auto;
  padding: 20px;
`;

export const Form = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};

  h2 {
    margin: 0 0 20px;
  }

  label {
    display: block;
    font-size: 0.8rem;
    font-weight: 700;
    margin: 0 5px 3px;
    opacity: 0.8;
  }

  input {
    display: block;
    margin-bottom: 40px;
    width: 100%;
    border: none;
    padding: 12px 16px;
    background-color: rgba(255, 255, 255, 0.07);
    outline: none;
    color: inherit;
    border-radius: 6px;
  }
  select {
    background-color: rgba(255, 255, 255, 0.07);
    color: inherit;
    padding: 12px 16px;
    margin-bottom: 30px;
    border: none;
    border-radius: 6px;
  }
  input:hover {
    background-color: rgba(255, 255, 255, 0.14);
  }

  input:active,
  input:focus {
    background-color: rgba(255, 255, 255, 0.21);
  }
`;

export const SaveButton = styled.button`
  height: 50px;
  line-height: 50px;
  background-color: ${({ theme }) => theme.secondary};
  border: none;
  color: inherit;
  border-radius: 10px;
  padding: 0 24px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.8rem;
  outline: none;
  transition: all 0.2s;
  cursor: pointer;
  margin-right: 15px;

  &:hover {
    background-color: ${({ theme }) => theme.secondaryDark};
  }

  &:active {
    transition: all 0.1s;
    transform: scale(0.9);
  }
`;

export const DeleteButton = styled.button`
  height: 50px;
  line-height: 50px;
  background-color: #ff4136;
  border: none;
  color: inherit;
  border-radius: 10px;
  padding: 0 24px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.8rem;
  outline: none;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    background-color: #c92d24;
  }

  &:active {
    transition: all 0.1s;
    transform: scale(0.9);
  }
`;
