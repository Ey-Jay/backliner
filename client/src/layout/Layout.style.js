import styled from 'styled-components';

export const FlexContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

export const NavWrapper = styled.div`
  background-color: ${({ theme }) => theme.backgroundColorDark};
  width: 300px;
`;

export const Content = styled.main`
  flex: 1;
  padding: 35px;
`;

export const Header = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
  margin: 0 0 35px;

  h1 {
    flex: 1;
    margin: 0;
  }

  section {
    display: flex;
    align-items: center;
  }

  section > * {
    display: inline-flex;
    margin-left: 20px;
  }
`;
