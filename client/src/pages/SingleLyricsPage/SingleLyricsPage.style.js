import styled from 'styled-components';

export const Container = styled.div`
  padding: 40px;
  max-width: 600px;
  margin: 0 auto;
`;

export const Lyrics = styled.div``;

export const EditButton = styled.button`
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

export const ProjectName = styled.div`
  padding: 5px 8px;
  background-color: ${({ color }) => color || '#666'};
  border-radius: 3px;
  font-size: 0.6rem;
  font-weight: 700;
  text-transform: uppercase;
  display: inline-block;
`;
