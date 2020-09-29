import styled from 'styled-components';

export const Modal = styled.div`
  background-color: ${({ theme }) => theme.backgroundColorLight};
  border-radius: 10px;
  padding: 20px;
  min-width: 200px;
  min-height: 200px;
  position: relative;

  h2 {
    margin: 0 0 20px;
    font-size: 1rem;
    text-align: center;
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

export const ModalControls = styled.div`
  text-align: center;

  & > * + * {
    margin-top: 10px;
  }
`;

export const Button = styled.button`
  display: block;
  background-color: rgba(0, 0, 0, 0.07);
  border: none;
  color: inherit;
  padding: 12px 24px;
  width: 100%;
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
