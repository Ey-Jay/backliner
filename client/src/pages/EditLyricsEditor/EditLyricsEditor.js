import React, { useState, useRef, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import {
  Editor,
  EditorState,
  RichUtils,
  convertToRaw,
  convertFromRaw,
} from 'draft-js';
import 'draft-js/dist/Draft.css';

import useGetAPI from 'hooks/useGetAPI';
import { apiUrl } from 'config/constants';
import Spinner from 'components/Spinner';
import Layout from 'layout';
import {
  Container,
  TitleInput,
  EditorContainer,
  EditorControls,
  Control,
  SaveButton,
} from './EditLyricsEditor.style';
import { ReactComponent as ItalicIcon } from 'assets/svg/Lyrics_Editor_Icons/Italic.svg';
import { ReactComponent as UnderlineIcon } from 'assets/svg/Lyrics_Editor_Icons/Underline.svg';
import { ReactComponent as UppercaseIcon } from 'assets/svg/Lyrics_Editor_Icons/Uppercase.svg';
import { ReactComponent as StrikeIcon } from 'assets/svg/Lyrics_Editor_Icons/Strike.svg';
import { ReactComponent as HeadingOneIcon } from 'assets/svg/Lyrics_Editor_Icons/HeadingOne.svg';
import { ReactComponent as HeadingTwoIcon } from 'assets/svg/Lyrics_Editor_Icons/HeadingTwo.svg';
import { FiBold as BoldIcon } from 'react-icons/fi';

const styleMap = {
  UPPERCASE: {
    textTransform: 'uppercase',
  },
};

const EditLyricsEditor = () => {
  const { id, bid } = useParams();
  const { data, loading, error } = useGetAPI(`/lyrics/${id}`);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [lyricsTitle, setLyricsTitle] = useState('');

  useEffect(() => {
    if (data.data) {
      console.log(data.data);
      setEditorState(
        EditorState.createWithContent(
          convertFromRaw(JSON.parse(data.data.data.content))
        )
      );
      setLyricsTitle(data.data.data.title);
    }
  }, [data]);

  const history = useHistory();

  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  const saveDocument = () => {
    const document = JSON.stringify(
      convertToRaw(editorState.getCurrentContent())
    );
    axios
      .put(`${apiUrl}/lyrics/${data.data.data._id}`, {
        title: `${lyricsTitle}`,
        content: document,
      })
      .then((res) => history.push(`/${bid}/lyrics/${res.data.data._id}`))
      .catch((err) => console.error(err));
  };

  const editorRef = useRef();

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

  return (
    <Layout title="Lyrics Editor">
      <Container>
        <TitleInput
          type="text"
          placeholder="Please enter title..."
          value={lyricsTitle}
          onChange={(e) => setLyricsTitle(e.target.value)}
        />
        <EditorContainer onClick={() => editorRef.current.focus()}>
          <EditorControls onClick={(e) => e.stopPropagation()}>
            <Control
              onMouseDown={(e) => {
                e.preventDefault();
                setEditorState(
                  RichUtils.toggleInlineStyle(editorState, 'BOLD')
                );
              }}
            >
              <BoldIcon style={{ width: '24px', height: '24px' }} />
            </Control>
            <Control
              onMouseDown={(e) => {
                e.preventDefault();
                setEditorState(
                  RichUtils.toggleInlineStyle(editorState, 'ITALIC')
                );
              }}
            >
              <ItalicIcon />
            </Control>
            <Control
              onMouseDown={(e) => {
                e.preventDefault();
                setEditorState(
                  RichUtils.toggleInlineStyle(editorState, 'UNDERLINE')
                );
              }}
            >
              <UnderlineIcon />
            </Control>
            <Control
              onMouseDown={(e) => {
                e.preventDefault();
                setEditorState(
                  RichUtils.toggleInlineStyle(editorState, 'STRIKETHROUGH')
                );
              }}
            >
              <StrikeIcon />
            </Control>
            <Control
              onMouseDown={(e) => {
                e.preventDefault();
                setEditorState(
                  RichUtils.toggleInlineStyle(editorState, 'UPPERCASE')
                );
              }}
            >
              <UppercaseIcon />
            </Control>
            <Control
              onMouseDown={(e) => {
                e.preventDefault();
                setEditorState(
                  RichUtils.toggleBlockType(editorState, 'header-one')
                );
              }}
            >
              <HeadingOneIcon />
            </Control>
            <Control
              onMouseDown={(e) => {
                e.preventDefault();
                setEditorState(
                  RichUtils.toggleBlockType(editorState, 'header-two')
                );
              }}
            >
              <HeadingTwoIcon />
            </Control>
          </EditorControls>
          <Editor
            ref={editorRef}
            customStyleMap={styleMap}
            editorState={editorState}
            onChange={setEditorState}
            handleKeyCommand={handleKeyCommand}
            placeholder="May the creative juices start flowing..."
          />
        </EditorContainer>
        <SaveButton onClick={saveDocument}>Save</SaveButton>
      </Container>
    </Layout>
  );
};

export default EditLyricsEditor;