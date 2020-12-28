import Link from 'next/link';
import { useRouter } from 'next/router';
import ReactTooltip from 'react-tooltip';

import withUserAndDb from '@middleware/withAuthAndDb';
import getDbUser from '@utils/getDbUser';

import { verifyIdToken } from '@utils/auth/firebaseAdmin';
import { useUser } from '@utils/auth/useUser';

import RoundButton from '@components/RoundButton';
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
} from '@style/pages/checkin';
import avatars from 'assets/band-avatars';

const CheckInPage = ({ dbUser, fbUser }) => {
  const router = useRouter();
  const { logout } = useUser();

  const handlePlusButton = () => {};

  return (
    <>
      <Container>
        <Controls>
          <UserPicture>
            <img src={fbUser.picture} alt="" />
          </UserPicture>
          <ReactTooltip effect="solid" />
          <span data-tip="Add Band">
            <RoundButton icon="plus" onClick={handlePlusButton} />
          </span>
          <span data-tip="Sign Out">
            <RoundButton icon="logoff" onClick={logout} />
          </span>
        </Controls>
        <BandList>
          {dbUser.bands.map((band) => (
            <div key={band._id}>
              <Link href={`/${band._id}/projects`}>
                <a>
                  <Band>
                    <Picture>
                      <img src={`band-avatars${avatars[band.avatar]}`} alt="" />
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
                </a>
              </Link>
            </div>
          ))}
          {dbUser.bands.length === 0 && (
            <EmptyBand>Create a new workspace at the top</EmptyBand>
          )}
        </BandList>
        <YourID>
          <h2>Your Backliner ID</h2>
          <p>{dbUser._id}</p>
        </YourID>
        <Policy onClick={() => router.push(`/privacy-policy`)}>
          Privacy Policy
        </Policy>
      </Container>
    </>
  );
};

export async function getServerSideProps({ req }) {
  try {
    await withUserAndDb(req, verifyIdToken);
    const { dbUser, fbUser } = req;

    return { props: { dbUser, fbUser } };
  } catch (error) {
    // Redirect to index
    console.log(error);
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
}

export default CheckInPage;
