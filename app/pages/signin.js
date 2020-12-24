import { useEffect } from 'react';
import { useRouter } from 'next/router';

import parseCookiesServerSide from '@utils/auth/parseCookiesServerSide';
import { verifyIdToken } from '@utils/auth/firebaseAdmin';
import FirebaseAuth from '@components/FirebaseAuth';
import { useUser } from '@utils/auth/useUser';

import LogoSVG from '@assets/svg/Logo.svg';
import TextSVG from '@assets/svg/Text.svg';
import { Container, Flex, SignInButton, Policy } from '@style/pages/signin';

const SignInPage = () => {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user) router.push('/checkin');
  }, [user]);

  return (
    <Container>
      <div>
        <Flex>
          <LogoSVG />
          <TextSVG />
        </Flex>
        <FirebaseAuth />
      </div>
      <Policy onClick={() => history.push(`/privacy-policy`)}>
        Privacy Policy
      </Policy>
    </Container>
  );
};

export async function getServerSideProps({ req }) {
  try {
    // Validate user
    const cookies = parseCookiesServerSide(req.headers.cookie);
    await verifyIdToken(cookies.auth.token);

    // Redirect to checkin
    return {
      redirect: {
        destination: '/checkin',
        permanent: false,
      },
    };
  } catch (error) {
    // Show sign in
    return {
      props: {},
    };
  }
}

export default SignInPage;
