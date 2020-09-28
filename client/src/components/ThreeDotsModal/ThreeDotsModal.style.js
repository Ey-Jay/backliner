import styled, { css } from 'styled-components';

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
