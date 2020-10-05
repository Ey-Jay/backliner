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

export const TopBar = styled.div`
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  background-color: ${({ theme }) => theme.backgroundColor};
  z-index: 99999;
  height: 80px;
  align-items: center;

  h1 {
    flex: 1;
    font-size: 1.7rem;
    padding-left: 20px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin: 0;
  }
`;

export const Buttons = styled.div`
  white-space: nowrap;
  display: flex;
  align-items: center;
  padding-right: 20px;
`;

export const TopButton = styled.button`
  height: 45px;
  width: 45px;
  background-color: rgba(247, 247, 250, 0.07);
  color: ${({ color, theme }) =>
    color === 'secondary' ? theme.secondary : 'inherit'};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50%;
  position: relative;
  transition: all 0.2s;
  outline: none;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    transform: scale(1.1);
  }

  &:focus {
    border: 3px solid ${({ theme }) => theme.secondary};
  }

  &:active {
    transition: all 0.1s;
    transform: scale(0.9);
  }
`;
