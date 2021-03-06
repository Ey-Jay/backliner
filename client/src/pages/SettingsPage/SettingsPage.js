import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import { GlobalContext } from 'context/GlobalContext';
import { APIContext } from 'context/APIContext';
import { ModalContext } from 'context/ModalContext';

import firebase from 'fb';
import Layout from 'layout';
import avatars from 'assets/band-avatars';
import { apiUrl } from 'config/constants';
import {
  Container,
  Members,
  Member,
  MemberList,
  MemberItem,
  AddMemberItem,
  MemberImage,
  MemberName,
  TrashWrapper,
  Avatars,
  Avatar,
  DangerZone,
  DeleteButton,
  SaveButton,
  YourID,
  Attribution,
} from './SettingsPage.style';
import { ReactComponent as TrashIcon } from 'assets/svg/TrashIcon.svg';

const SettingsPage = ({
  match: {
    params: { bid },
  },
}) => {
  const { dbUser } = useContext(GlobalContext);
  const { bandData, hasGoogle, getAllData, isAPILoading, error } = useContext(
    APIContext
  );
  const { dispatch } = useContext(ModalContext);

  const [owner, setOwner] = useState(null);
  const [members, setMembers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [avatar, setAvatar] = useState(null);
  const [nameField, setNameField] = useState('');
  const [addMemberId, setAddMemberId] = useState('');

  useEffect(() => {
    if (bandData) {
      setNameField(bandData.name);
      setOwner(bandData.owner._id);
      setMembers(bandData.members);
    }
  }, [bandData]);

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

      await getAllData();

      setAvatar(null);
      setIsLoading(false);
    } catch (e) {
      console.error(e);
    }
  };

  const onClickAdd = async () => {
    try {
      setIsLoading(true);

      const postData = {
        member_id: addMemberId,
      };

      const token = await firebase.auth().currentUser.getIdToken();
      await axios.post(`${apiUrl}/bands/${bid}/members`, postData, {
        headers: { authorization: `Bearer ${token}` },
      });

      await getAllData();

      setAvatar(null);
      setAddMemberId('');
      setIsLoading(false);
    } catch (e) {
      console.error(e);
    }
  };

  const onClickRemove = async (uid) => {
    try {
      setIsLoading(true);

      const token = await firebase.auth().currentUser.getIdToken();
      await axios.delete(`${apiUrl}/bands/${bid}/members/${uid}`, {
        headers: { authorization: `Bearer ${token}` },
      });

      await getAllData();

      setAvatar(null);
      setAddMemberId('');
      setIsLoading(false);
    } catch (e) {
      console.error(e);
    }
  };

  const onClickDeleteHandler = () =>
    dispatch({ type: 'SHOW_DELETE', payload: { id: bid, type: 'bands' } });

  if (isAPILoading || isLoading)
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

  if (dbUser._id !== bandData.owner._id)
    return (
      <Layout title="Settings">
        <Container>
          <h2>Members</h2>
          <section>
            <MemberList>
              {members.map((member) => (
                <MemberItem key={member._id}>
                  <MemberImage>
                    <img src={member.avatar} alt="" />
                  </MemberImage>
                  <MemberName>
                    {member.name}
                    {member._id === owner ? ' (Owner)' : ''}
                  </MemberName>
                </MemberItem>
              ))}
            </MemberList>
          </section>
          <YourID>
            <h2>Your Backliner ID</h2>
            <p>{dbUser._id}</p>
          </YourID>
          <Attribution>
            This app uses icons from <a href="https://css.gg">css.gg</a> and{' '}
            <a href="https://remixicon.com">Remix Icons</a>. Furthermore,
            pictures from <a href="https://unsplash.com/">Unsplash</a> are used
            for the avatars.
          </Attribution>
        </Container>
      </Layout>
    );

  return (
    <Layout title="Settings">
      <Container>
        <h2>General</h2>
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
            {bandData.members.map((member) => (
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
                current={idx === bandData.avatar}
                chosen={idx === avatar}
                onClick={() => setAvatar(idx)}
              >
                <img src={ava} alt="" />
              </Avatar>
            ))}
          </Avatars>
        </section>
        <section style={{ marginBottom: '100px' }}>
          <SaveButton onClick={onClickSave}>Save</SaveButton>
        </section>
        <section style={{ marginBottom: '100px' }}>
          <h2>Google Calendar</h2>
          <SaveButton
            disabled={hasGoogle}
            onClick={async () => {
              const token = await firebase.auth().currentUser.getIdToken();
              axios
                .get(`${apiUrl}/getAuthUrl?bid=${bid}`, {
                  headers: { authorization: `Bearer ${token}` },
                })
                .then((res) => {
                  window.location.replace(res.data.url);
                });
            }}
          >
            {hasGoogle
              ? 'Google Calendar Connected √'
              : 'Connect Google Calendar'}
          </SaveButton>
        </section>
        <h2>Members</h2>
        <section style={{ marginBottom: '100px' }}>
          <MemberList>
            {members.map((member) => (
              <MemberItem key={member._id}>
                <MemberImage>
                  <img src={member.avatar} alt="" />
                </MemberImage>
                <MemberName>
                  {member.name}
                  {member._id === owner ? ' (Owner)' : ''}
                </MemberName>
                {member._id === owner ? null : (
                  <TrashWrapper onClick={() => onClickRemove(member._id)}>
                    <TrashIcon />
                  </TrashWrapper>
                )}
              </MemberItem>
            ))}
            <AddMemberItem>
              <input
                type="text"
                value={addMemberId}
                onChange={(e) => setAddMemberId(e.currentTarget.value)}
                placeholder="Paste User ID here"
              />
              <button onClick={onClickAdd}>Add</button>
            </AddMemberItem>
          </MemberList>
        </section>
        <DangerZone>
          <h2>Danger Zone</h2>
          <DeleteButton onClick={onClickDeleteHandler}>
            Delete Band
          </DeleteButton>
        </DangerZone>
        <YourID>
          <h2>Your Backliner ID</h2>
          <p>{dbUser._id}</p>
        </YourID>
        <Attribution>
          This app uses icons from <a href="https://css.gg">css.gg</a> and{' '}
          <a href="https://remixicon.com">Remix Icons</a>.
        </Attribution>
      </Container>
    </Layout>
  );
};

export default SettingsPage;
