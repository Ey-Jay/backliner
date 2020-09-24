import styled, { css } from 'styled-components';

export const Container = styled.main`
  max-width: 700px;
  margin: 0 auto;
`;

export const Controls = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 20px;

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
  margin: 0 0 35px;
  padding: 0;

  & > li + li {
    margin-top: 15px;
  }
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  background-color: rgba(247, 247, 250, 0.14);
  border-radius: 40px;
  height: 80px;
  overflow: hidden;
`;

export const Dot = styled.div`
  width: 70px;
  height: 70px;
  margin: 5px 15px 5px 5px;
  border-radius: 50%;
  background-color: ${({ color = '#111111' }) => color};
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
  background-color: #10d164;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(0, 0, 0, 0.8);

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
`;
