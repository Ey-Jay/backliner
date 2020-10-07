import React, { useEffect, useState, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { EditorState, convertFromRaw } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';

import { ModalContext } from 'context/ModalContext';
import useGetAPI from 'hooks/useGetAPI';
import Spinner from 'components/Spinner';
import Layout from 'layout';
import CommentBox from 'components/CommentBox';
import {
  Container,
  EditButton,
  Lyrics,
  ProjectName,
  DeleteButton,
} from './SingleLyricsPage.style';

const SingleLyricsPage = ({
  match: {
    params: { bid },
  },
}) => {
  const { id } = useParams();
  const { dispatch } = useContext(ModalContext);
  const { data, loading, error } = useGetAPI(`/lyrics/${id}`);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const history = useHistory();

  useEffect(() => {
    if (data.data)
      setEditorState(convertFromRaw(JSON.parse(data.data.data.content)));
  }, [data]);

  if (error) {
    return (
      <Layout title={error.code}>
        <div>{error.message}</div>
      </Layout>
    );
  }

  if (loading) {
    return (
      <Layout>
        <Spinner type="page" />
      </Layout>
    );
  }

  const html = stateToHTML(editorState);

  const onClickDeleteHandler = () =>
    dispatch({
      type: 'SHOW_DELETE',
      payload: {
        id,
        type: 'lyrics',
      },
    });

  return (
    <Layout title={data.data.data.title}>
      <Container>
        <ProjectName color={data.data.data.project?.theme}>
          {data.data.data.project?.name || 'No project'}
        </ProjectName>
        <Lyrics dangerouslySetInnerHTML={{ __html: html }} />
        <EditButton onClick={() => history.push(`/${bid}/edit-lyrics/${id}`)}>
          edit
        </EditButton>
        <DeleteButton onClick={onClickDeleteHandler}>Delete</DeleteButton>
        <CommentBox type="lyrics" />
      </Container>
    </Layout>
  );
};

export default SingleLyricsPage;
