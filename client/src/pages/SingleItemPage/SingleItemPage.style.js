import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 50px;
  padding-left: 35px;
`;

export const Details = styled.div`
  display: grid;
  grid-template-columns: repeat(2fr, 1fr);
  grid-template-rows: repeat(3fr, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 20px;
  margin-bottom: 50px;
  justify-content: center;
  max-width: 700px;
  margin: 40px auto;
`;

export const ProjectName = styled.div`
  grid-area: 1 / 1 / 2 / 2;

  span {
    margin: 0 0 10px;
    padding: 5px;
    background-color: ${({ color }) => color || '#666'};
    border-radius: 3px;
    text-transform: uppercase;
    font-weight: bold;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: 0.7rem;
  }

  /* Check for padding etc. */
`;

export const Author = styled.div`
  grid-area: 2 / 1 / 3 / 2;
  display: flex;
`;

export const AuthorImage = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  overflow: hidden;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export const AuthorName = styled.div`
  margin: 0 10px;
`;

export const URL = styled.div`
  grid-area: 3 / 1 / 4 / 2;
  /* display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical; */
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 0.8em;

  a {
    margin-left: 10px;
    opacity: 0.6;
  }
`;

export const Created = styled.div`
  grid-area: 1 / 2 / 2 / 3;
  font-size: 0.8em;
`;

export const Updated = styled.div`
  grid-area: 2 / 2 / 3 / 3;
  font-size: 0.8em;
`;

export const Controls = styled.div`
  grid-area: 3 / 2 / 4 / 3;

  button {
    height: 30px;
    line-height: 30px;
    background-color: ${({ theme }) => theme.secondary};
    border: none;
    color: inherit;
    border-radius: 10px;
    padding: 0 12px;
    margin-right: 10px;
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
  }
`;

export const Icon = styled.div``;
