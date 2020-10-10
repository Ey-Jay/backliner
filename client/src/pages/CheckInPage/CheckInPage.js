import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';

import { ModalContext } from 'context/ModalContext';
import firebase from 'fb';
import useGetAPI from 'hooks/useGetAPI';
import RoundButton from 'components/RoundButton';
import Spinner from 'components/Spinner';
import {
  Container,
  Controls,
  BandList,
  Band,
  EmptyBand,
  Picture,
  Description,
  Name,
  Members,
  Member,
  UserPicture,
  YourID,
  Policy,
} from './CheckInPage.style';
import avatars from 'assets/band-avatars';

const CheckInPage = () => {
  const { dispatch } = useContext(ModalContext);
  const history = useHistory();
  const { data, loading, error } = useGetAPI('/');
  const [copied, setCopied] = useState(false);

  const handleCopy = (text) => {
    copy(text.toString())
    setCopied(true);
  }

  const logoff = () =>
    firebase
      .auth()
      .signOut()
      .then(() => history.push('/signin'))
      .catch((e) => console.error(e));

  const handlePlusButton = () => dispatch({ type: 'SHOW_ADDBAND' });

  if (loading) return <Spinner />;

  if (error) return <p>{JSON.stringify(error)}</p>;

  return (
    <>
      <Container>
        <Controls>
          <UserPicture>
            <img src={data.data.data.avatar} alt="" />
          </UserPicture>
          <ReactTooltip effect="solid" />
          <span data-tip="Add Band">
            <RoundButton icon="plus" onClick={handlePlusButton} />
          </span>
          <span data-tip="Sign Out">
            <RoundButton icon="logoff" onClick={logoff} />
          </span>
        </Controls>
        <BandList>
          {data.data.data.bands.map((band) => (
            <div key={band._id}>
              <Link to={`/${band._id}/projects`}>
                <Band>
                  <Picture>
                    <img src={avatars[band.avatar]} alt="" />
                  </Picture>
                  <Description>
                    <Name>{band.name}</Name>
                    <Members>
                      {band.members.map((member) => (
                        <Member key={member._id} src={member.avatar} />
                      ))}
                    </Members>
                  </Description>
                </Band>
              </Link>
            </div>
          ))}
          {data.data.data.bands.length === 0 && (
            <EmptyBand>Create a new workspace at the top</EmptyBand>
          )}
        </BandList>
        <YourID>
          <h2>Your Backliner ID</h2>
          <p onClick={handleCopy}>{data.data.data._id}</p>
        </YourID>
        <Policy onClick={() => history.push(`/privacy-policy`)}>
          Privacy Policy
        </Policy>
      </Container>
    </>
  );
};

export default CheckInPage;
