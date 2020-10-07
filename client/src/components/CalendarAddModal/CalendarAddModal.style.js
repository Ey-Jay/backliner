import styled from 'styled-components';

export const Modal = styled.div`
  background-color: ${({ theme }) => theme.backgroundColorLight};
  border-radius: 10px;
  padding: 20px;
  min-width: 300px;
  min-height: 200px;
  box-shadow: 2px 4px 6px #00000066, 2px 4px 18px #00000066;
  position: relative;

  h2 {
    margin: 0 0 20px;
  }
`;

export const IconContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({ theme }) => theme.primary};

  svg {
    height: 60px;
  }
`;

export const Label = styled.label`
  display: block;
  font-size: 0.8rem;
  font-weight: 700;
  margin: 5px 5px 3px;
  opacity: 0.8;
`;

export const Input = styled.input`
  display: block;
  margin-bottom: 20px;
  width: 100%;
  border: none;
  padding: 12px 16px;
  background-color: rgba(255, 255, 255, 0.07);
  outline: none;
  color: inherit;
  border-radius: 6px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.14);
  }

  &:active,
  &:focus {
    background-color: rgba(255, 255, 255, 0.21);
  }
`;

export const Controls = styled.div`
  margin-top: 20px;
  text-align: right;

  & > * + * {
    margin-left: 10px;
  }
`;

export const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.primary};
  border: none;
  color: inherit;
  padding: 12px 24px;
  border-radius: 6px;
  outline: none;
  font-weight: 700;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 0.7rem;
  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.primaryDark};
  }

  &:active  {
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
  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.backgroundColor};
  }

  &:active {
    transition: all 0.1s;
    transform: scale(0.9);
  }
`;
