import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

import firebase from 'fb';
import useGetAPI from 'hooks/useGetAPI';
import { apiUrl } from 'config/constants';
import RoundButton from 'components/RoundButton';
import {
  Container,
  Controls,
  BandList,
  Band,
  Picture,
  Description,
  Name,
  Members,
  Member,
  ModalBackground,
  Modal,
  ModalControls,
} from './CheckInPage.style';

import BandImageSrc from 'assets/alpen_fiesta.jpg';
import MemberImageSrc from 'assets/ospen_schneider.jpg';

const CheckInPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalLoading, setIsModalLoading] = useState(false);
  const [nameFieldValue, setNameFieldValue] = useState('');
  const history = useHistory();
  const { data, loading, error } = useGetAPI('/bands', isModalVisible);

  const logoff = () =>
    firebase
      .auth()
      .signOut()
      .then(() => history.push('/signin'))
      .catch((e) => console.error(e));

  const handleModalAdd = async () => {
    setIsModalLoading(true);

    const token = await firebase.auth().currentUser.getIdToken();

    const response = await axios.post(
      `${apiUrl}/bands`,
      {
        name: nameFieldValue,
      },
      {
        headers: { authorization: `Bearer ${token}` },
      }
    );

    if (response.data.success) {
      setNameFieldValue('');
      setIsModalLoading(false);
      setIsModalVisible(false);
    }
  };

  const handleModalCancel = () => {
    setNameFieldValue('');
    setIsModalVisible(false);
  };

  const handlePlusButton = () => setIsModalVisible(true);

  const onChangeHandler = (e) => setNameFieldValue(e.currentTarget.value);

  if (loading) return <p>Loading ...</p>;

  if (error) return <p>{JSON.stringify(error)}</p>;

  return (
    <>
      {isModalVisible && (
        <ModalBackground>
          <Modal>
            {isModalLoading ? (
              'Loading...'
            ) : (
              <>
                <h2>Add Band</h2>
                <label>Name</label>
                <input
                  type="text"
                  value={nameFieldValue}
                  onChange={onChangeHandler}
                />
                <ModalControls>
                  <button onClick={handleModalAdd}>Add</button>
                  <button onClick={handleModalCancel}>Cancel</button>
                </ModalControls>
              </>
            )}
          </Modal>
        </ModalBackground>
      )}
      <Container>
        <Controls>
          <RoundButton icon="plus" onClick={handlePlusButton} />
          <RoundButton icon="logoff" onClick={logoff} />
        </Controls>
        <BandList>
          {data.data.data.map((band) => (
            <div key={band._id}>
              <Link to={`/${band._id}/projects`}>
                <Band>
                  <Picture>
                    <img src={BandImageSrc} alt="" />
                  </Picture>
                  <Description>
                    <Name>{band.name}</Name>
                    <Members>
                      {band.members.map((member) => (
                        <Member key={member._id} src={MemberImageSrc} />
                      ))}
                    </Members>
                  </Description>
                </Band>
              </Link>
            </div>
          ))}
        </BandList>
      </Container>
    </>
  );
};

export default CheckInPage;
