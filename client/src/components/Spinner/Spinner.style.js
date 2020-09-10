import styled from 'styled-components';

export const SpinnerContainer = styled.div`
  z-index: 999999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.backgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
`;
