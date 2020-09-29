import styled from 'styled-components';

export const Container = styled.div`
  margin: 25px;
  height: 90%;
  padding-bottom: 100px;
`;

export const TitleInput = styled.input`
  background-color: transparent;
  border: none;
  margin-bottom: 25px;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.color};
  outline: none;
`;

export const EditorContainer = styled.div`
  height: 100%;
  max-height: 100%;
  margin: 0 auto;
  padding: 15px;
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

export const SaveButton = styled.button`
  margin-top: 10px;
  background-color: transparent;
  padding: 10px;
  color: ${({ theme }) => theme.color};
  border: 1px solid ${({ theme }) => theme.color};
`;
