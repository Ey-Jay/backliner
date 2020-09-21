import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { EditorState, convertFromRaw } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';

import useGetAPI from 'hooks/useGetAPI';
import Layout from 'layout';

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

  if (error) return <div>Error happened</div>;
  if (loading) return <div>Loading..</div>;

  const html = stateToHTML(editorState);

  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </Layout>
  );
};

export default SingleLyricsPage;
