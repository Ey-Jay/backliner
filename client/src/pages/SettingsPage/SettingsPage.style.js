import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  padding: 20px;
  margin: 0 auto;

  section {
    margin-bottom: 40px;
  }

  label {
    display: block;
    font-weight: bold;
    margin: 0 0 4px 4px;
  }

  input,
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

export const Members = styled.select``;

export const Member = styled.option``;

export const MemberList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const MemberItem = styled.li`
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.07);
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 10px;

  & > * + * {
    margin-left: 15px;
  }
`;

export const AddMemberItem = styled.li`
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.07);
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 10px;

  & > * + * {
    margin-left: 15px;
  }

  button {
    margin: 0;
    height: 50px;
    width: 100px;
  }
`;

export const MemberImage = styled.div`
  height: 50px;
  width: 50px;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export const MemberName = styled.div`
  flex: 1;
`;

export const TrashWrapper = styled.div`
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Avatars = styled.div``;

export const Avatar = styled.div`
  height: 80px;
  width: 80px;
  border-radius: 10%;
  margin: 4px;
  border: solid 3px
    ${({ chosen, theme }) => (chosen ? theme.secondary : 'transparent')};
  cursor: pointer;
  position: relative;
  display: inline-block;
  overflow: hidden;

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }

  &::after {
    content: '✔';
    display: ${({ current }) => (current ? 'flex' : 'none')};
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    height: 20px;
    width: 20px;
    background-color: ${({ theme }) => theme.primary};
  }
`;

export const SaveButton = styled.button``;

export const DangerZone = styled.div`
  background-color: #ff4136;
  padding: 20px;
  margin-bottom: 40px;

  h2 {
    margin-top: 0;
  }
`;

export const DeleteButton = styled.button``;
