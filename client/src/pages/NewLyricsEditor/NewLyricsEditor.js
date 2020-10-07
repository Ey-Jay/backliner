import React, { useState, useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Editor, EditorState, RichUtils, convertToRaw } from 'draft-js';
import 'draft-js/dist/Draft.css';

import { GlobalContext } from 'context/GlobalContext';
import useGetAPI from 'hooks/useGetAPI';
import Layout from 'layout';
import { apiUrl } from 'config/constants';
import {
  Container,
  TitleInput,
  EditorContainer,
  EditorControls,
  Control,
  SaveButton,
  ChooseProject,
} from './NewLyricsEditor.style';
import { ReactComponent as ItalicIcon } from 'assets/svg/Lyrics_Editor_Icons/Italic.svg';
import { ReactComponent as UnderlineIcon } from 'assets/svg/Lyrics_Editor_Icons/Underline.svg';
import { ReactComponent as UppercaseIcon } from 'assets/svg/Lyrics_Editor_Icons/Uppercase.svg';
import { ReactComponent as StrikeIcon } from 'assets/svg/Lyrics_Editor_Icons/Strike.svg';
import { ReactComponent as HeadingOneIcon } from 'assets/svg/Lyrics_Editor_Icons/HeadingOne.svg';
import { ReactComponent as HeadingTwoIcon } from 'assets/svg/Lyrics_Editor_Icons/HeadingTwo.svg';
import { FiBold as BoldIcon } from 'react-icons/fi';
import Spinner from 'components/Spinner';

const styleMap = {
  UPPERCASE: {
    textTransform: 'uppercase',
  },
};

const NewLyricsEditor = ({
  match: {
    params: { bid },
  },
}) => {
  const { data, loading } = useGetAPI(`/bands/${bid}/projects`);
  const [selectedProject, setSelectedProject] = useState(null);
  const { currentUser } = useContext(GlobalContext);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [lyricsTitle, setLyricsTitle] = useState('');

  const history = useHistory();

  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  const saveDocument = async () => {
    const document = JSON.stringify(
      convertToRaw(editorState.getCurrentContent())
    );
    const token = await currentUser.getIdToken();
    axios
      .post(
        `${apiUrl}/bands/${bid}/lyrics`,
        {
          title: `${lyricsTitle}`,
          project: selectedProject,
          content: document,
        },
        {
          headers: { authorization: `Bearer ${token}` },
        }
      )
      .then((res) => history.push(`/${bid}/lyrics/${res.data.data._id}`))
      .catch((err) => console.error(err));
  };

  const editorRef = useRef();

  if (loading)
    return (
      <Layout title="New Lyrics">
        <Spinner type="page" />
      </Layout>
    );

  return (
    <Layout title="New Lyrics">
      <Container>
        <TitleInput
          type="text"
          placeholder="Please enter title..."
          onChange={(e) => setLyricsTitle(e.target.value)}
          autoFocus
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
        <ChooseProject>
          <label>Choose Project</label>
          <select
            value={selectedProject}
            onChange={(e) => setSelectedProject(e.currentTarget.value)}
          >
            <option value={null}>No Project</option>
            {data &&
              data.data.data.map((proj) => (
                <option key={proj._id} value={proj._id}>
                  {proj.name}
                </option>
              ))}
          </select>
        </ChooseProject>
        <SaveButton onClick={saveDocument}>Save</SaveButton>
      </Container>
    </Layout>
  );
};

export default NewLyricsEditor;
