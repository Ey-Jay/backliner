import styled from 'styled-components';

export const Modal = styled.div`
  background-color: ${({ theme }) => theme.backgroundColorLight};
  border-radius: 10px;
  padding: 20px;
  min-width: 180px;
  min-height: 60px;
`;

export const ModalControls = styled.div`
  text-align: center;

  button {
    background-color: transparent;
    border: solid 2px #fff;
    color: inherit;
    padding: 12px 24px;
    margin-left: 20px;
    border-radius: 6px;
    outline: none;
    font-weight: 700;
    cursor: pointer;
  }

  button:hover {
    background-color: ${({ theme }) => theme.primary};
  }
  & > * + * {
    margin-left: 10px;
  }
`;
