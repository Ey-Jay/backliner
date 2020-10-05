import styled, { css } from 'styled-components';

export const Container = styled.main`
  max-width: 700px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpointMobile}) {
    display: none;
  }
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

export const List = styled.ul`
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
  list-style-type: none;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  background-color: rgba(247, 247, 250, 0.14);
  border-radius: 40px;
  height: 80px;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    background-color: rgba(247, 247, 250, 0.35);
  }
`;

export const Icon = styled.div`
  height: 70px;
  width: 70px;
  margin: 0 10px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.8);

  svg {
    height: 30px;
  }
`;

export const Details = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  & > * + * {
    margin-top: 10px;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
`;

export const ProjectName = styled.p`
  padding: 5px 8px;
  background-color: ${({ color }) => color || '#666'};
  border-radius: 3px;
  margin: 0 0 0 10px;
  font-size: 0.6rem;
  font-weight: 700;
  text-transform: uppercase;
`;

export const FileName = styled.h3`
  margin: 0;
`;

export const Author = styled.p`
  font-size: 0.8rem;
  margin: 0;
  opacity: 0.6;
`;

export const Divider = styled.p`
  font-size: 0.8rem;
  margin: 0 10px;
  opacity: 0.6;
`;

export const Timestamp = styled.p`
  font-size: 0.8rem;
  margin: 0;
  opacity: 0.6;
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

export const Mobile = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpointMobile}) {
    display: block;
  }
`;
