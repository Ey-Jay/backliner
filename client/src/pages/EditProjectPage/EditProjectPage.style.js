import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;

  label {
    display: block;
    font-weight: 700;
    margin-bottom: 4px;
  }

  section {
    margin-bottom: 40px;
  }

  input {
    background-color: ${({ theme }) => theme.backgroundColorLight};
    border: none;
    padding: 16px 20px;
    color: inherit;
    width: 100%;
    border-radius: 6px;
    outline: none;
  }
`;

export const Colors = styled.div`
  display: flex;
  justify-content: flex-start;

  & > * + * {
    margin-left: 10px;
  }
`;

export const Color = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &::after {
    content: '✔';
    display: ${({ active }) => (active ? 'block' : 'none')};
  }
`;

export const ItemList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

  & > * + * {
    margin-top: 10px;
  }
`;

export const Item = styled.li`
  background-color: rgba(255, 255, 255, 0.07);
  padding: 10px;
  display: flex;
  align-items: center;
  border-radius: 6px;

  & > * + * {
    margin-left: 10px;
  }
`;

export const IconWrapper = styled.div``;

export const ItemDescription = styled.div`
  flex: 1;
`;

export const TrashWrapper = styled.div`
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transition: all 0.1s;
    transform: scale(0.9);
  }
`;

export const DangerZone = styled.div`
  background-color: #ff4136;
  padding: 20px;
  margin-bottom: 40px;
  border-radius: 10px;

  h2 {
    margin-top: 0;
  }
`;

export const DeleteButton = styled.button`
  background-color: #ffffff;
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
  color: #ff4136;

  &:hover {
    transform: scale(1.1);
  }

  &:active  {
    transition: all 0.1s;
    transform: scale(0.9);
  }
`;

export const SaveButton = styled.button`
  background-color: ${({ theme }) => theme.secondary};
  border: none;
  color: inherit;
  padding: 16px 32px;
  border-radius: 6px;
  outline: none;
  font-weight: 700;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 0.7rem;
  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.secondaryDark};
  }

  &:active  {
    transition: all 0.1s;
    transform: scale(0.9);
  }
`;
