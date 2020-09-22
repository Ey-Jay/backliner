import styled from 'styled-components';

export const Container = styled.div`
  margin: 35px;
  height: 90%;
`;

export const EditButton = styled.button`
  margin-left: 35px;
  background-color: transparent;
  padding: 10px;
  color: ${({ theme }) => theme.color};
  border: 1px solid ${({ theme }) => theme.color};
  cursor: pointer;
  outline: none;
`;
