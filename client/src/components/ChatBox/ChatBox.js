import React, { useState, useRef, useEffect, useContext } from 'react';
import io from 'socket.io-client';
import { isEmpty } from 'ramda';
import moment from 'moment';

import firebase from 'fb';
import RoundButton from 'components/RoundButton';
import TransformText from 'components/TransformText';
import { AirplaneIcon } from 'components/RoundButton/Icons.style';
import {
  ChatHeader,
  ChatBody,
  ChatItem,
  ChatInputWrapper,
  ChatInput,
  SendButton,
  SenderImage,
  Message,
  AuthorName,
  TimeStamp,
} from './ChatBox.style';

import { GlobalContext } from 'context/GlobalContext';

const socket = io(process.env.REACT_APP_API_URL);

const ChatBox = ({ isOpen, setIsOpen }) => {
  const { bandID, dbUser } = useContext(GlobalContext);
  const [messageValue, setMessageValue] = useState('');
  const [messages, setMessages] = useState([]);

  const messagesRef = useRef(messages);
  messagesRef.current = messages;

  useEffect(() => {
    if (firebase.auth().currentUser)
      firebase
        .auth()
        .currentUser.getIdToken()
        .then((token) => {
          socket.emit('join room', bandID, token);
          socket.on('history', (history) => setMessages(history));
          socket.on('new msg', (msg) =>
            setMessages([...messagesRef.current, msg])
          );
        })
        .catch((err) => console.error(err));

    return () => {
      socket.emit('leave room');
      socket.off('new msg');
    };
  }, [bandID]);

  const textBox = useRef();

  const enterKeyHandler = (e) => {
    if (e.key === 'Enter') {
      if (e.shiftKey) {
        return;
      } else {
        e.preventDefault();

        if (!isEmpty(messageValue.trim())) {
          socket.emit('chat message', {
            content: messageValue,
            authorID: dbUser._id,
          });
        }
        e.currentTarget.innerText = '';
        setMessageValue('');
      }
    }
  };

  const buttonClickHandler = () => {
    if (!isEmpty(messageValue.trim())) {
      socket.emit('chat message', {
        content: messageValue,
        authorID: dbUser._id,
      });
    }
    textBox.current.innerText = '';
    textBox.current.focus();
    setMessageValue('');
  };

  return (
    <>
      <ChatHeader>
        <RoundButton icon="backarrow" onClick={() => setIsOpen(!isOpen)} />
      </ChatHeader>
      <ChatBody>
        {messages.map((item) => (
          <ChatItem isMine={item.author._id === dbUser._id} key={item._id}>
            {item.author._id !== dbUser._id && (
              <SenderImage src={item.author.avatar} />
            )}
            <Message isMine={item.author._id === dbUser._id}>
              {item.author._id !== dbUser._id && (
                <AuthorName>{item.author.name}</AuthorName>
              )}
              <TransformText text={item.content.trim()} />
              <TimeStamp isMine={item.author._id === dbUser._id}>
                {moment(item.createdAt).format('HH:MM – DD/MM/YY')}
              </TimeStamp>
            </Message>
          </ChatItem>
        ))}
      </ChatBody>
      <ChatInputWrapper>
        <ChatInput
          role="textbox"
          contentEditable="true"
          ref={textBox}
          onInput={(e) => setMessageValue(e.currentTarget.innerText)}
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
