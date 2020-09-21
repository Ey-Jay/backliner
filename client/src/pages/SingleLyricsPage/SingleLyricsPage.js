import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { EditorState, convertFromRaw } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';

import useGetAPI from 'hooks/useGetAPI';
import Spinner from 'components/Spinner';
import Layout from 'layout';
import { Container } from './SingleLyricsPage.style';

const SingleLyricsPage = () => {
  const { id } = useParams();
  const { data, loading, error } = useGetAPI(`/lyrics/${id}`);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

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

  return (
    <Layout title={data.data.data.title}>
      <Container dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
};

export default SingleLyricsPage;
