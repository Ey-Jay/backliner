import styled, { css } from 'styled-components';

export const Container = styled.main`
  max-width: 1250px;
  margin: 0 auto;
  padding: 0 60px;
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

    section:last-child {
      display: none;
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
    height: 60px;
    line-height: 60px;
    width: 100%;
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

    @media (max-width: ${({ theme }) => theme.breakpointMobile}) {
      display: none;
    }
  `}
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

export const FileView = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
`;

export const SingleFile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 10px;
  background-color: rgba(247, 247, 250, 0.14);
  border-radius: 10px;
  cursor: pointer;
  padding: 10px;
  position: relative;

  &:hover {
    background-color: rgba(247, 247, 250, 0.35);
  }
`;

export const FirstRow = styled.div`
  display: flex;
`;

export const ProjectName = styled.p`
  margin: 0 0 10px;
  padding: 5px;
  max-width: 85%;
  background-color: ${({ color }) => color || '#666'};
  border-radius: 3px;
  font-size: 0.7rem;
  text-transform: uppercase;
  font-weight: bold;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const ItemSettingsButton = styled.div`
  position: absolute;
  top: 10px;
  right: 5px;
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

export const FileName = styled.h3`
  margin: 0 0 15px;
  flex: 1;
`;

export const Icon = styled.div`
  background-color: rgba(0, 0, 0, 0.07);
  height: 80px;
  width: 100%;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.8);
  margin: 0 0 15px;

  svg {
    height: 35px;
  }
`;

export const Details = styled.div`
  font-size: 0.8rem;
  opacity: 0.6;
`;

export const Author = styled.p`
  font-style: italic;
  font-size: 0.8rem;
  margin: 0;
  display: inline-block;
`;

export const Divider = styled.p`
  margin: 0 5px;
  display: inline-block;
`;

export const Timestamp = styled.p`
  font-style: italic;
  font-size: 0.8rem;
  margin: 0;
  display: inline-block;
`;
