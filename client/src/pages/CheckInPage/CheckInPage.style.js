import styled from 'styled-components';

export const Container = styled.div`
  max-width: 400px;
  margin: 80px auto;
`;

export const Controls = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;

  & > * + * {
    margin-left: 20px;
  }
`;

export const BandList = styled.ul`
  margin: 0;
  padding: 0;
`;

export const Band = styled.li`
  margin: 0;
  padding: 0;
  display: flex;
  background-color: transparent;
  padding: 10px;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.07);
  }

  &:active {
    transition: all 0.1s;
    background-color: rgba(255, 255, 255, 0.14);
  }
`;

export const Picture = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 10px;
  overflow: hidden;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export const Description = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 15px;
`;

export const Name = styled.h2`
  margin: 0 0 5px;
  padding: 0;
  font-size: 1.4rem;
`;

export const Members = styled.div`
  & > * + * {
    margin-left: -8px;
  }
`;

export const Member = styled.img`
  height: 30px;
  width: 30px;
  object-fit: cover;
  border-radius: 50%;
  border: solid 2px ${({ theme }) => theme.backgroundColor};
`;

export const ModalBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99999999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  min-width: 300px;
  min-height: 200px;
  background-color: ${({ theme }) => theme.backgroundColorLight};
  padding: 20px;
  border-radius: 10px;

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

  button {
    background-color: transparent;
    border: solid 2px #fff;
    color: inherit;
    padding: 12px 24px;
    border-radius: 6px;
    outline: none;
    font-weight: 700;
    cursor: pointer;
  }

  button:first-child {
    background-color: ${({ theme }) => theme.primary};
    border: solid 2px ${({ theme }) => theme.primary};
  }

  button:first-child:hover {
    background-color: ${({ theme }) => theme.primaryDark};
    border: solid 2px ${({ theme }) => theme.primaryDark};
  }
`;
