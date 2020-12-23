import useSWR from 'swr';
import Link from 'next/link';

import { useUser } from '@utils/auth/useUser';

const fetcher = (url, token) =>
  fetch(url, {
    method: 'GET',
    headers: new Headers({ 'Content-Type': 'application/json', token }),
    credentials: 'same-origin',
  }).then((res) => res.json());

const Layout = ({ children }) => {
  const { user, logout } = useUser();
  const { data, error } = useSWR(
    user ? ['/api/getUser', user.token] : null,
    fetcher
  );

  if (!user) return <div>{children}</div>;

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
    </div>
  );
};

export default Layout;
