import React, { useState, useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import moment from 'moment';
import ReactPlayer from 'react-player';

import { ModalContext } from 'context/ModalContext';

import useGetAPI from 'hooks/useGetAPI';
import Layout from 'layout';
import Spinner from 'components/Spinner';
import Embed from 'components/Embed';
import CommentBox from 'components/CommentBox';
import {
  Container,
  Details,
  ProjectName,
  URL,
  Author,
  AuthorImage,
  AuthorName,
  Created,
  Updated,
  Controls,
  Icon,
  EmbedWrap,
  EditButton,
  DeleteButton,
} from './SingleItemPage.style';
import { ReactComponent as LyricsIcon } from 'assets/svg/LyricsIcon.svg';
import { ReactComponent as MicIcon } from 'assets/svg/MicIcon.svg';
import { ReactComponent as VideoIcon } from 'assets/svg/VideoIcon.svg';
import { ReactComponent as FileIcon } from 'assets/svg/FileIcon.svg';

const SingleItemPage = ({ type }) => {
  const { id, bid } = useParams();
  const { data, loading, error } = useGetAPI(`/${type}/${id}`);
  const [fileProject, setFileProject] = useState(null);
  const [fileName, setFileName] = useState('');
  const [fileURL, setFileURL] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [authorImage, setAuthorImage] = useState('');

  const history = useHistory();
  const { dispatch } = useContext(ModalContext);

  useEffect(() => {
    if (data) {
      setFileProject(data?.data?.data?.project?.name);
      setFileName(data?.data?.data?.title);
      setFileURL(data?.data?.data?.url);
      setAuthorName(data?.data?.data?.author.name);
      setAuthorImage(data?.data?.data?.author.avatar);
    }
  }, [data]);

  if (loading)
    return (
      <Layout title={fileName}>
        <Spinner type="page" />
      </Layout>
    );

  if (error)
    return (
      <Layout title={fileName}>
        <p>Error: {JSON.stringify(error)}</p>
      </Layout>
    );

  let thumbnail = '';

  switch (type) {
    case 'audio':
      thumbnail = <MicIcon />;
      break;

    case 'video':
      thumbnail = <VideoIcon />;
      break;

    case 'lyrics':
      thumbnail = <LyricsIcon />;
      break;

    default:
      thumbnail = <FileIcon />;
  }

  const deleteOptionHandler = () =>
    dispatch({
      type: 'SHOW_DELETE',
      payload: {
        id,
        type,
      },
    });
  return (
    <Layout title={fileName}>
      <Container>
        <EmbedWrap>
          <div>
            <Embed url={fileURL} />
          </div>
        </EmbedWrap>
        <Details>
          <ProjectName
            color={data.data.data.project ? data.data.data.project.theme : null}
          >
            <span>{fileProject || 'No Project'}</span>
          </ProjectName>
          <Author>
            <AuthorImage>
              <img src={authorImage} alt="" />
            </AuthorImage>
            <AuthorName>{authorName}</AuthorName>
          </Author>
          <URL>
            {thumbnail}
            <a href={fileURL}>{fileURL}</a>
          </URL>
          <Created>
            Created: {moment(data.data.data.createdAt).format('DD/MM/YYYY')}
          </Created>
          <Updated>
            Updated: {moment(data.data.data.updatedAt).format('DD/MM/YYYY')}
          </Updated>
          <Controls>
            <EditButton
              onClick={() =>
                history.push(
                  `/${bid}/edit-${type === 'files' ? 'file' : type}/${id}`
                )
              }
            >
              Edit
            </EditButton>
            <DeleteButton onClick={deleteOptionHandler}>Delete</DeleteButton>
          </Controls>
        </Details>
        <CommentBox type={type} />
      </Container>
    </Layout>
  );
};

export default SingleItemPage;
