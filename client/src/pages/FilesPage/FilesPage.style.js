import styled, { css } from "styled-components";

export const Container = styled.main`
  max-width: 1250px;
  margin: 0 auto;
`;

export const Controls = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 20px;
  margin-right: 10px;

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

export const FileView = styled.div`
  /* display: flex;
  justify-content: center;
  flex-wrap: wrap; */
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

export const ProjectName = styled.p``;

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
  font-size: 2vh;
`;

export const Timestamp = styled.p`
  font-style: italic;
  font-size: 2vh;
`;
// Remember to use flex-wrap: wrap; for the container
