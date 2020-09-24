import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
`;

export const ProjectName = styled.h2`
  padding: 5px 10px;
  border-radius: 3px;
  margin-bottom: 40px;
  display: inline-block;
  background-color: ${({ bg }) => bg};
`;
