import React, { useState, useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import useGetAPI from 'hooks/useGetAPI';
import Spinner from 'components/Spinner';
import Layout from 'layout';
import axios from 'axios';

import { GlobalContext } from 'context/GlobalContext';
import { APIContext } from 'context/APIContext';

import firebase from 'fb';
import { apiUrl } from 'config/constants';
import {
  Container,
  Form,
  SaveButton,
  DeleteButton,
} from './EditItemPage.style';

const EditItemPage = ({ type }) => {
  const { id, bid } = useParams();
  const { data, loading, error } = useGetAPI(`/${type}/${id}`);
  const { currentUser } = useContext(GlobalContext);
  const { getAllData, projects, isAPILoading, error: errorAPI } = useContext(
    APIContext
  );

  const [itemProject, setItemProject] = useState(null);
  const [itemTitle, setItemTitle] = useState('');
  const [itemURL, setItemURL] = useState('');

  const history = useHistory();

  let headline = '';

  switch (type) {
    case 'audio':
      headline = 'Edit Audio';
      break;
    case 'video':
      headline = 'Edit Video';
      break;
    case 'file':
      headline = 'Edit File';
      break;
    default:
      headline = 'Edit Project';
  }

  useEffect(() => {
    if (data) {
      setItemProject(data?.data?.data?.project?._id);
      setItemTitle(data?.data?.data?.title);
      setItemURL(data?.data?.data?.url);
    }
  }, [data]);

  const saveItem = async () => {
    const token = await firebase.auth().currentUser.getIdToken();

    const res = await axios.put(
      `${apiUrl}/${type}/${data.data.data._id}`,
      {
        project: itemProject ? itemProject : null,
        title: `${itemTitle}`,
        url: `${itemURL}`,
      },
      {
        headers: { authorization: `Bearer ${token}` },
      }
    );

    await getAllData();

    history.push(
      `/${bid}/${type === 'file' ? 'files' : type}/${res.data.data._id}`
    );
  };

  const deleteItem = () => {
    const token = currentUser.getIdToken();
    axios
      .delete(`${apiUrl}/${type}/${data.data.data._id}`, {
        headers: { authorization: `Bearer ${token}` },
      })
      .then((res) => history.push(`/${bid}/${type}/${res.data.data._id}`))
      .catch((err) => console.error(err));
  };

  if (loading || isAPILoading)
    return (
      <Layout title={itemTitle}>
        <Spinner type="page" />
      </Layout>
    );

  if (error || errorAPI)
    return (
      <Layout title={itemTitle}>
        <p>Error: {JSON.stringify(error)}</p>
      </Layout>
    );

  return (
    <Layout>
      <Container>
        <Form>
          <h2>{headline}</h2>
          <label>Project</label>
          <select
            value={itemProject}
            onChange={(e) => setItemProject(e.currentTarget.value)}
          >
            <option value={null}>No Project</option>
            {projects.map((item) => (
              <option value={item._id} key={item._id}>
                {item.name}
              </option>
            ))}
          </select>
          <label>Name</label>
          <input
            type="text"
            value={itemTitle}
            onChange={(e) => setItemTitle(e.currentTarget.value)}
          />
          <label>URL</label>
          <input
            type="text"
            value={itemURL}
            onChange={(e) => setItemURL(e.currentTarget.value)}
          />
        </Form>
        <SaveButton onClick={saveItem}>Save Changes</SaveButton>
        <DeleteButton onClick={deleteItem}>Delete</DeleteButton>
      </Container>
    </Layout>
  );
};

export default EditItemPage;
