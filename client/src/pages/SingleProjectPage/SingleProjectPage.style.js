import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  padding: 20px;
`;

export const TitleFlex = styled.div`
  display: inline-flex;
  align-items: center;
  margin: 20px 20px 40px;
`;

export const Dot = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
`;

export const ProjectName = styled.h2`
  padding: 5px 10px;
  border-radius: 3px;
  margin: 0 0 0 10px;
  display: inline-block;
  flex: 1;
`;
