import styled from 'styled-components';

export const Container = styled.div`
  margin: 25px auto 100px;
  max-width: 650px;
  padding: 10px;
`;

export const TitleInput = styled.input`
  background-color: transparent;
  border: none;
  margin-bottom: 25px;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.color};
  outline: none;
  width: 100%;
`;

export const EditorContainer = styled.div`
  min-height: 500px;
  margin: 0 auto 40px;
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
  background-color: ${({ theme }) => theme.secondary};
  border: none;
  color: inherit;
  padding: 16px 32px;
  border-radius: 6px;
  outline: none;
  font-weight: 700;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 0.7rem;
  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.secondaryDark};
  }

  &:active  {
    transition: all 0.1s;
    transform: scale(0.9);
  }
`;

export const ChooseProject = styled.div`
  margin-bottom: 40px;

  select {
    background-color: ${({ theme }) => theme.backgroundColorLight};
    border: none;
    padding: 16px 20px;
    color: inherit;
    width: 100%;
    border-radius: 6px;
    outline: none;
  }
`;
