import styled from 'styled-components';

export const FlexContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

export const NavWrapper = styled.div`
  background-color: ${({ theme }) => theme.backgroundColorDark};
  width: 300px;

  @media (max-width: ${({ theme }) => theme.breakpointMobile}) {
    display: none;
  }
`;

export const Content = styled.main`
  flex: 1;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 35px;

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

/* 
  TODO: look into scrollbar again.
  * currently it is hidden by setting its width to 0
*/

export const PageBody = styled.div`
  flex: 1;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 0;
  }
`;

export const ChatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 0 15px 15px;
  background-color: ${({ theme }) => theme.backgroundColorDark};
  margin-right: ${({ isOpen }) => (isOpen ? 'initial' : '-300px')};
`;
