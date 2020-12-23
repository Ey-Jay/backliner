import useSWR from 'swr';
import { useRouter } from 'next/router';

import { useUser } from '@utils/auth/useUser';

const fetcher = (url, token) =>
  fetch(url, {
    method: 'GET',
    headers: new Headers({ 'Content-Type': 'application/json', token }),
    credentials: 'same-origin',
  }).then((res) => res.json());

const Layout = ({ children }) => {
  const router = useRouter();
  const { user, logout } = useUser();
  const { data, error } = useSWR(
    user ? ['/api/getUser', user.token] : null,
    fetcher
  );

  if (!user || ['/', '/signin'].includes(router.pathname))
    return <div>{children}</div>;

  return (
    <div>
      <div>
        Layout:{' '}
        <p
          style={{
            display: 'inline-block',
            color: 'blue',
            textDecoration: 'underline',
            cursor: 'pointer',
          }}
          onClick={() => logout()}
        >
          Log out
        </p>
      </div>
      {children}
      <div>{JSON.stringify(data)}</div>
    </div>
  );
};

export default Layout;
