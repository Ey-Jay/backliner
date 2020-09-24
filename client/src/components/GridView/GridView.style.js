import styled, { css } from 'styled-components';

export const Container = styled.main`
  max-width: 1250px;
  margin: 0 auto;
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

export const FileView = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
`;

export const SingleFile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 10px 10px 10px 10px;
  background-color: rgba(247, 247, 250, 0.14);
  border-radius: 5%;
  cursor: pointer;
  &:hover {
    background-color: rgba(247, 247, 250, 0.35);
  }
`;

export const Details = styled.div`
  margin-left: 10px;
`;

export const FirstRow = styled.div`
  display: flex;
`;

export const ProjectName = styled.p`
  padding: 5px;
  width: 100px;
  background-color: ${({ color }) => color || '#666'};
  border-radius: 3px;
`;

export const ItemSettingsButton = styled.div`
  position: relative;
  margin-left: 50px;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: flex-end;
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

export const FileName = styled.h3``;

export const Icon = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.8);

  svg {
    height: 25px;
  }
`;

export const Author = styled.p`
  font-style: italic;
  font-size: 0.8rem;
`;

export const Timestamp = styled.p`
  font-style: italic;
  font-size: 0.8rem;
`;
