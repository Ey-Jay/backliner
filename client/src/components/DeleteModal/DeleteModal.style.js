import styled from 'styled-components';

export const Modal = styled.div`
  background-color: ${({ theme }) => theme.backgroundColorLight};
  border-radius: 10px;
  padding: 20px;
  min-width: 300px;
  min-height: 100px;

  h2 {
    margin: 0 0 40px;
  }
`;

export const Controls = styled.div`
  text-align: right;

  & > * + * {
    margin-left: 10px;
  }
`;

export const DeleteButton = styled.button`
  background-color: #ff4136;
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
    background-color: #c92d24;
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
    background-color: rgba(0, 0, 0, 0.14);
  }

  &:active  {
    transition: all 0.1s;
    transform: scale(0.9);
  }
`;
