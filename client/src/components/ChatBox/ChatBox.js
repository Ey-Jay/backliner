import React, { useState, useRef } from 'react';
import { isEmpty } from 'ramda';

import RoundButton from 'components/RoundButton';
import TransformText from 'components/TransformText';
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

const chatMessages = [
  { message: 'heelloo', isMine: false },
  { message: 'are you there?', isMine: false },
  { message: 'hey whatsup', isMine: true },
  { message: 'nm and you?', isMine: false },
];

const ChatBox = ({ isOpen, setIsOpen }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState(chatMessages);

  const textBox = useRef();

  const enterKeyHandler = (e) => {
    if (e.key === 'Enter') {
      if (e.shiftKey) {
        return;
      } else {
        e.preventDefault();

        if (!isEmpty(message.trim())) {
          setMessages([...messages, { message, isMine: true }]);
        }
        e.currentTarget.innerText = '';
        setMessage('');
      }
    }
  };

  const buttonClickHandler = () => {
    if (!isEmpty(message.trim())) {
      setMessages([...messages, { message, isMine: true }]);
    }
    textBox.current.innerText = '';
    textBox.current.focus();
    setMessage('');
  };

  return (
    <>
      <ChatHeader>
        <RoundButton icon="backarrow" onClick={() => setIsOpen(!isOpen)} />
      </ChatHeader>
      <ChatBody>
        {messages.map((item, idx) => (
          <ChatItem isMine={item.isMine} key={idx}>
            {!item.isMine && <SenderImage src={memberSrc} />}
            <Message isMine={item.isMine}>
              <TransformText text={item.message.trim()} />
            </Message>
          </ChatItem>
        ))}
      </ChatBody>
      <ChatInputWrapper>
        <ChatInput
          role="textbox"
          contentEditable="true"
          ref={textBox}
          onInput={(e) => setMessage(e.currentTarget.innerText)}
          onKeyDown={enterKeyHandler}
        />
        <SendButton onClick={buttonClickHandler}>
          <AirplaneIcon style={{ color: 'white' }} />
        </SendButton>
      </ChatInputWrapper>
    </>
  );
};

export default ChatBox;
