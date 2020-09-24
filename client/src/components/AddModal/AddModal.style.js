import styled from 'styled-components';

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Modal = styled.div`
  background-color: ${({ theme }) => theme.backgroundColorLight};
  border-radius: 10px;
  padding: 20px;
  min-width: 300px;
  min-height: 200px;

  h2 {
    margin: 0 0 20px;
  }
`;

export const Form = styled.div`
  margin: 0 0 20px;

  label {
    display: block;
    font-size: 0.8rem;
    font-weight: 700;
    margin: 0 5px 3px;
    opacity: 0.8;
  }

  input,
  select {
    display: block;
    margin-bottom: 20px;
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

export const Controls = styled.div`
  text-align: right;

  & > * + * {
    margin-left: 10px;
  }
`;

export const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.primary};
  border: solid 2px ${({ theme }) => theme.primary};
  color: inherit;
  padding: 12px 24px;
  border-radius: 6px;
  outline: none;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.primaryDark};
    border: solid 2px ${({ theme }) => theme.primaryDark};
  }
`;

export const CancelButton = styled.button`
  background-color: transparent;
  border: solid 2px #fff;
  color: inherit;
  padding: 12px 24px;
  border-radius: 6px;
  outline: none;
  font-weight: 700;
  cursor: pointer;
`;

export const Colors = styled.div`
  display: flex;
  justify-content: flex-start;

  & > * + * {
    margin-left: 10px;
  }
`;

export const ColorOption = styled.section`
  background-color: ${({ color }) => color};
  height: 30px;
  width: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &::after {
    content: '🤖';
    display: ${({ active }) => (active ? 'block' : 'none')};
    font-size: 0.6rem;
  }
`;