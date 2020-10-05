import styled, { css } from 'styled-components';

export const Container = styled.main`
  max-width: 700px;
  margin: 0 auto;
  padding: 20px;
`;

export const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  margin-right: 10px;
  margin-left: 10px;

  & > * + * {
    margin-left: 5px;
  }

  @media (max-width: ${({ theme }) => theme.breakpointMobile}) {
    justify-content: initial;

    section:first-child {
      flex: 1;
    }
  }
`;

export const NewButton = styled.button`
  height: 50px;
  line-height: 50px;
  background-color: ${({ theme }) => theme.secondary};
  border: none;
  color: inherit;
  border-radius: 10px;
  padding: 0 24px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.8rem;
  outline: none;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.secondaryDark};
  }

  &:active {
    transition: all 0.1s;
    transform: scale(0.9);
  }

  @media (max-width: ${({ theme }) => theme.breakpointMobile}) {
    width: 100%;
    height: 60px;
    line-height: 60px;
  }
`;

export const ViewButton = styled.div`
  ${({ active }) => css`
    height: 50px;
    width: 50px;
    background-color: ${active
      ? 'rgba(247, 247, 250, 0.28)'
      : 'rgba(247, 247, 250, 0.07)'};
    display: inline-flex;
    margin-left: 5px;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    transition: all 0.2s;
    cursor: pointer;

    svg {
      height: 30px;
    }

    &:hover {
      background-color: rgba(247, 247, 250, 0.35);
    }

    &:active {
      transition: all 0.1s;
      background-color: rgba(247, 247, 250, 0.07);
    }
  `}
`;

export const ListView = styled.ul`
  list-style: none;
  margin: 0 0 35px;
  padding: 0;

  & > li + li {
    margin-top: 15px;
  }
`;

export const EmptyList = styled.li`
  background-color: rgba(255, 255, 255, 0.07);
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
  padding: 20px;
  border-radius: 10px;
  margin: 0 10px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  background-color: rgba(247, 247, 250, 0.14);
  border-radius: 40px;
  height: 80px;
  overflow: hidden;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpointMobile}) {
    border-radius: 10px;
    height: initial;
    padding: 15px;
    border-left: solid 10px ${({ color = '#999' }) => color};
  }
`;

export const Dot = styled.div`
  width: 70px;
  height: 70px;
  margin: 5px 15px 5px 5px;
  border-radius: 50%;
  background-color: ${({ color = '#111111' }) => color};

  @media (max-width: ${({ theme }) => theme.breakpointMobile}) {
    display: none;
  }
`;

export const Details = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ItemTitle = styled.h2`
  margin: 0;
  font-size: 1.3rem;
  margin-bottom: 5px;
`;

export const Elements = styled.div`
  display: flex;

  & > * + * {
    margin-left: 20px;
  }
`;

export const Type = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.div`
  height: 25px;
  width: 25px;
  background-color: rgba(255, 255, 255, 0.07);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.4);

  svg {
    height: 15px;
  }
`;

export const Amount = styled.p`
  margin: 0;
  padding: 0;
  margin-left: 5px;
`;

export const ItemSettingsButton = styled.div`
  width: 40px;
  height: 40px;
  margin: 20px;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.14);
  }

  &:active {
    transition: all 0.1s;
    background-color: rgba(0, 0, 0, 0.21);
  }

  @media (max-width: ${({ theme }) => theme.breakpointMobile}) {
    margin: 0px;
  }
`;
