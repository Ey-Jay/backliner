import styled from 'styled-components';

export const Container = styled.div`
  margin: 25px;
  height: 90%;
`;

export const EditorContainer = styled.div`
  min-height: 100%;
  margin: 0 auto;
  padding: 15px;
  width: 90%;
  max-width: 850px;
  border: 1px solid ${({ theme }) => theme.color};
  cursor: text;
`;

export const EditorControls = styled.div`
  padding-bottom: 15px;
  margin-bottom: 50px;
  border-bottom: 1px solid ${({ theme }) => theme.color};
  cursor: initial;
  & > * + * {
    margin-left: 15px;
  }
`;

export const Control = styled.button`
  background-color: transparent;
  color: white;
  padding: 5px;
  border: none;
  cursor: pointer;
`;
