import styled from 'styled-components';

export const ChatHeader = styled.div`
  height: 130px;
  padding-top: 35px;
  p {
    font-size: 1.5rem;
    text-align: center;
  }
`;

export const ChatBody = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  flex: 1;
`;

export const ChatItem = styled.li`
  display: flex;
  align-items: flex-end;
  margin-bottom: 20px;
  justify-content: ${({ isMine }) => (isMine ? 'flex-end' : 'initial')};
`;

export const SenderImage = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
  border-radius: 50%;
`;

export const Message = styled.p`
  display: inline-block;
  margin: 2px 10px;
  padding: 10px;
  background-color: ${({ theme, isMine }) =>
    isMine ? theme.secondary : theme.backgroundColor};
  border-radius: 10px;
  position: relative;

  &::before {
    content: '';
    display: 'block';
    background-color: ${({ theme, isMine }) =>
      isMine ? theme.secondary : theme.backgroundColor};
    height: 10px;
    width: 10px;
    position: absolute;
    transform: rotate(55deg);
    ${({ isMine }) => (isMine ? 'right' : 'left')}: -4px;
    bottom: 8px;
  }
`;

export const ChatInputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ChatInput = styled.div`
  flex: 1;
  margin-right: 10px;
  max-height: 100px;
  padding: 15px;
  border-radius: 10px;
  overflow: auto;
  outline: none;
  background-color: ${({ theme }) => theme.backgroundColor};
`;

export const SendButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  width: 35px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.secondary};
`;
