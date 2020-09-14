import React, { useEffect, useState } from 'react';

import RoundButton from 'components/RoundButton';
import { AirplaneIcon } from 'components/RoundButton/Icons.style';
import memberSrc from 'assets/ospen_schneider.jpg';
import {
  ChatHeader,
  ChatBody,
  ChatItem,
  ChatInputWrapper,
  ChatInput,
  SendButton,
  SenderImage,
  Message,
} from './ChatBox.style';

const ChatBox = ({ isOpen, setIsOpen }) => {
  const [message, setMessage] = useState('');

  const enterKeyHandler = (e) => {
    if (e.key === 'Enter') {
      console.log(message);
      e.currentTarget.textContent = '';
    }
  };

  return (
    <>
      <ChatHeader>
        <RoundButton icon="backarrow" onClick={() => setIsOpen(!isOpen)} />
      </ChatHeader>
      <ChatBody>
        <ChatItem>
          <SenderImage src={memberSrc} />
          <Message>testing asdfl;kja asdfjhl a;lskdjf kjasfl;k</Message>
        </ChatItem>
        <ChatItem>
          <SenderImage src={memberSrc} />
          <Message>tes</Message>
        </ChatItem>
        <ChatItem>
          <SenderImage src={memberSrc} />
          <Message>testing asdfl;kja asdfjhl a;lskdjf kjasfl;k</Message>
        </ChatItem>
        <ChatItem isMine={true}>
          <Message isMine={true}>
            testing asdfl;kja asdfjhl a;lskdjf kjasfl;k
          </Message>
        </ChatItem>
        <ChatItem>
          <SenderImage src={memberSrc} />
          <Message>testing asdfl;kja asdfjhl a;lskdjf kjasfl;k</Message>
        </ChatItem>
        <ChatItem isMine={true}>
          <Message isMine={true}>
            testing asdfl;kja asdfjhl a;lskdjf kjasfl;k
          </Message>
        </ChatItem>
        <ChatItem isMine={true}>
          <Message isMine={true}>testing</Message>
        </ChatItem>
      </ChatBody>
      <ChatInputWrapper>
        <ChatInput
          role="textbox"
          contentEditable="true"
          onInput={(e) => setMessage(e.currentTarget.textContent)}
          onKeyDown={enterKeyHandler}
        />
        <SendButton>
          <AirplaneIcon style={{ color: 'white' }} />
        </SendButton>
      </ChatInputWrapper>
    </>
  );
};

export default ChatBox;
