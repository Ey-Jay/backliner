import React, { useState, useRef } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';

import Layout from 'layout';
import {
  Container,
  EditorContainer,
  EditorControls,
  Control,
} from './LyricsEditor.style';
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

const LyricsEditor = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  const editorRef = useRef();

  return (
    <Layout title="Lyrics Editor">
      <Container>
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
      </Container>
    </Layout>
  );
};

export default LyricsEditor;
