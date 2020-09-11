import styled, { css } from 'styled-components';

export const Container = styled.main`
  max-width: 700px;
  margin: 0 auto;
`;

export const Controls = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  & > * + * {
    margin-left: 5px;
  }
`;

export const ViewButton = styled.div`
  ${({ active }) => css`
    height: 50px;
    width: 50px;
    background-color: ${active
      ? 'rgba(247, 247, 250, 0.28)'
      : 'rgba(247, 247, 250, 0.07)'};
    display: flex;
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
  margin: 0;
  padding: 0;

  & > li + li {
    margin-top: 15px;
  }
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  background-color: grey;
  border-radius: 40px;
  height: 80px;
  overflow: hidden;
`;

export const Dot = styled.div`
  width: 70px;
  height: 70px;
  margin-left: 5px;
  border-radius: 50%;
  background-color: red;
`;

export const Details = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ItemTitle = styled.h2`
  margin: 0;
`;

export const Elements = styled.div`
  display: flex;
`;

export const Type = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.div``;

export const Amount = styled.p`
  margin: 0;
  padding: 0;
`;

export const ItemSettingsButton = styled.div`
  width: 60px;
  background-color: pink;
`;
