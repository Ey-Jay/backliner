import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import useGetAPI from 'hooks/useGetAPI';
import Spinner from 'components/Spinner';
import TransformText from 'components/TransformText';
import { GlobalContext } from 'context/GlobalContext';
import axios from 'axios';
import firebase from 'fb';
import { apiUrl } from 'config/constants';

import {
  Container,
  Comments,
  Comment,
  CommentText,
  CommentDetails,
  NewComment,
  TextField,
  CommentButton,
} from './CommentBox.style';

const CommentBox = ({ type }) => {
  const [comments, setComments] = useState([]);
  const { id } = useParams();
  const { dbUser, setRerender, rerender } = useContext(GlobalContext);
  const { data, loading, error } = useGetAPI(
    `/${type}/${id}/comments`,
    rerender
  );

  const [content, setContent] = useState('');

  useEffect(() => {
    if (data) {
      setComments(data?.data?.data);
    }
  }, [data]);

  const addCommentHandler = async () => {
    const token = await firebase.auth().currentUser.getIdToken();

    await axios.post(
      `${apiUrl}/${type}/${id}/comments`,
      {
        author: `${dbUser._id}`,
        content: `${content}`,
      },
      {
        headers: { authorization: `Bearer ${token}` },
      }
    );
    setContent('');
    setRerender(new Date());
  };

  if (loading) return <Spinner type="page" />;

  if (error) return <p>{JSON.stringify(error)}</p>;

  return (
    <Container>
      <h2>Comments</h2>
      <Comments>
        {comments.map((comment) => (
          <Comment key={comment._id}>
            <CommentText>
              <TransformText text={comment.content.trim()} />
            </CommentText>
            <CommentDetails>
              <div>
                <img src={comment.author.avatar} alt="" />
                <span>{comment.author.name}</span>
              </div>
              <span>
                {moment(data.data.data.createdAt).format('DD/MM/YYYY')}
              </span>
            </CommentDetails>
          </Comment>
        ))}
        {comments.length === 0 ? (
          <Comment
            style={{
              justifyContent: 'center',
              fontWeight: '700',
              textTransform: 'uppercase',
              fontSize: '0.7rem',
              opacity: '0.5',
              padding: '20px',
            }}
          >
            No comments
          </Comment>
        ) : null}
      </Comments>
      <NewComment>
        <TextField
          value={content}
          type="text"
          rows="5"
          cols="80"
          placeholder="Type your comment here..."
          onChange={(e) => setContent(e.currentTarget.value)}
        ></TextField>
        <div>
          <CommentButton onClick={addCommentHandler}>Submit</CommentButton>
        </div>
      </NewComment>
    </Container>
  );
};

export default CommentBox;
