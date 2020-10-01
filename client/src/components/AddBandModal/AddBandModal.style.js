import styled from 'styled-components';

export const Modal = styled.div`
  min-width: 300px;
  min-height: 200px;
  background-color: ${({ theme }) => theme.backgroundColorLight};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 2px 4px 6px #000000, 2px 4px 18px #000000;

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

  input:hover {
    background-color: rgba(255, 255, 255, 0.14);
  }

  input:active,
  input:focus {
    background-color: rgba(255, 255, 255, 0.21);
  }
`;

export const ModalControls = styled.div`
  text-align: right;
  vertical-align: bottom;

  & > * + * {
    margin-left: 15px;
  }
`;

export const AddButton = styled.button`
  background-color: ${({ theme }) => theme.primary};
  border: none;
  color: inherit;
  padding: 12px 24px;
  border-radius: 6px;
  outline: none;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
  text-transform: uppercase;
  font-size: 0.7rem;

  &:hover {
    background-color: ${({ theme }) => theme.primaryDark};
  }

  &:active {
    transition: all 0.1s;
    transform: scale(0.9);
  }
`;

export const CancelButton = styled.button`
  background-color: transparent;
  border: none;
  color: inherit;
  padding: 12px 24px;
  border-radius: 6px;
  outline: none;
  font-weight: 700;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 0.7rem;

  &:hover {
    background-color: ${({ theme }) => theme.backgroundColor};
  }

  &:active {
    transition: all 0.1s;
    transform: scale(0.9);
  }
`;
