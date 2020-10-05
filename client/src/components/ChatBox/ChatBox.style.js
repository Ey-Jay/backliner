import styled from 'styled-components';

export const ChatHeader = styled.div`
  height: 130px;
  padding-top: 35px;
  p {
    font-size: 1.5rem;
    text-align: center;
  }
`;

//? style or remove scrollbar?

export const ChatBody = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  flex: 1;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 0;
  }
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

export const Message = styled.div`
  display: inline-block;
  margin: ${({ isMine }) => (isMine ? '12px 10px' : '30px 10px 2px')};
  padding: 10px;
  background-color: ${({ theme, isMine }) =>
    isMine ? theme.primary : theme.backgroundColor};
  border-radius: 10px;
  position: relative;

  &::before {
    content: '';
    display: 'block';
    background-color: ${({ theme, isMine }) =>
      isMine ? theme.primary : theme.backgroundColor};
    height: 10px;
    width: 10px;
    position: absolute;
    transform: rotate(55deg);
    ${({ isMine }) => (isMine ? 'right' : 'left')}: -4px;
    bottom: 8px;
  }
`;

export const AuthorName = styled.div`
  position: absolute;
  font-size: 0.6rem;
  top: -0.85rem;
  left: 10px;
  font-weight: bold;
  color: ${({ theme }) => theme.primary};
  text-transform: uppercase;
  white-space: nowrap;
`;

export const TimeStamp = styled.div`
  position: absolute;
  font-size: 0.6rem;
  bottom: -0.85rem;
  ${({ isMine }) => (isMine ? `right: 10px` : `left: 10px`)};
  opacity: 0.4;
  white-space: nowrap;
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
  box-shadow: inset 1px 2px 3px #00000033, inset 1px 2px 9px #00000033;
  background-color: ${({ theme }) => theme.backgroundColorLight};
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
  color: inherit;
  background-color: ${({ theme }) => theme.secondary};

  svg {
    position: relative;
    left: -1px;
  }
`;
