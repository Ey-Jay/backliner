import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import { GlobalContext } from 'context/GlobalContext';

import firebase from 'fb';
import Layout from 'layout';
import avatars from 'assets/band-avatars';
import { apiUrl } from 'config/constants';
import {
  Container,
  Members,
  Member,
  Avatars,
  Avatar,
  DangerZone,
  DeleteButton,
  SaveButton,
} from './SettingsPage.style';
import useGetAPInorerender from 'hooks/useGetAPInorerender';

const SettingsPage = ({
  match: {
    params: { bid },
  },
}) => {
  const { setRerender } = useContext(GlobalContext);
  const [nameField, setNameField] = useState('');
  const [owner, setOwner] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const { data, loading, error } = useGetAPInorerender(`/bands/${bid}`);
  const [isLoading, setIsLoading] = useState(false);
  console.log(data);

  useEffect(() => {
    if (data) {
      setNameField(data?.data?.data?.name);
      setOwner(data?.data?.data?.owner._id);
    }
  }, [data]);

  const onClickSave = async () => {
    try {
      setIsLoading(true);

      const postData = {
        name: nameField,
        owner: owner,
        avatar: avatar,
      };

      const token = await firebase.auth().currentUser.getIdToken();
      await axios.put(`${apiUrl}/bands/${bid}`, postData, {
        headers: { authorization: `Bearer ${token}` },
      });

      setAvatar(null);
      setIsLoading(false);
      setRerender(new Date());
    } catch (e) {
      console.error(e);
    }
  };

  if (loading || isLoading)
    return (
      <Layout title="Settings">
        <Container>
          <p>Loading...</p>
        </Container>
      </Layout>
    );

  if (error)
    return (
      <Layout title="Settings">
        <Container>
          <p>Error: {JSON.stringify(error)}</p>
        </Container>
      </Layout>
    );

  return (
    <Layout title="Settings">
      <Container>
        <section>
          <label>Band Name</label>
          <input
            type="text"
            value={nameField}
            onChange={(e) => setNameField(e.currentTarget.value)}
          />
        </section>
        <section>
          <label>Owner</label>
          <Members
            value={owner}
            onChange={(e) => setOwner(e.currentTarget.value)}
          >
            {data?.data?.data?.members.map((member) => (
              <Member key={member._id} value={member._id}>
                {member.name}
              </Member>
            ))}
          </Members>
        </section>
        <section>
          <label>Avatar</label>
          <Avatars>
            {avatars.map((ava, idx) => (
              <Avatar
                key={idx}
                current={idx === data?.data?.data?.avatar}
                chosen={idx === avatar}
                onClick={() => setAvatar(idx)}
              >
                <img src={ava} alt="" />
              </Avatar>
            ))}
          </Avatars>
        </section>
        <DangerZone>
          <h2>Danger Zone</h2>
          <DeleteButton>Delete Band</DeleteButton>
        </DangerZone>
        <section>
          <SaveButton onClick={onClickSave}>Save</SaveButton>
        </section>
      </Container>
    </Layout>
  );
};

export default SettingsPage;
