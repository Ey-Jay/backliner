import styled from 'styled-components';

export const Container = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpointMobile}) {
    display: flex;
    background-color: ${({ theme }) => theme.backgroundColorLight};
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 80px;
    z-index: 9999999;
    /* box-shadow: 0 0 7px #000000aa, 0 0 21px #000000aa; */
    border-top: solid 1px #666;
  }
`;

export const NavButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${({ active, theme }) => (active ? theme.primary : 'inherit')};
  opacity: ${({ active }) => (active ? '1' : '0.5')};
  flex: 1;
`;

export const Top = styled.div``;

export const Bottom = styled.div``;

export const TopButton = styled.button``;
