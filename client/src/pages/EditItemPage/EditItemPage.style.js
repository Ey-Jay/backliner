import styled, { css } from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  margin: 80px auto;
`;

export const Form = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
  padding: 20px;
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
  background-color: transparent;
  border: solid 2px #fff;
  color: inherit;
  padding: 12px 24px;
  margin-left: 20px;
  border-radius: 6px;
  outline: none;
  font-weight: 700;
  cursor: pointer;
`;

export const DeleteButton = styled.button`
  background-color: transparent;
  border: solid 2px #fff;
  color: inherit;
  padding: 12px 24px;
  margin-left: 10px;
  border-radius: 6px;
  outline: none;
  font-weight: 700;
  cursor: pointer;
`;
