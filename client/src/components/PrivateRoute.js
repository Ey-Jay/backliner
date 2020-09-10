import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { AuthContext } from 'context/AuthContext';
import Spinner from 'components/Spinner';

function PrivateRoute({ component: RouteComponent, ...rest }) {
  const { currentUser, isLoading } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <>{isLoading ? <Spinner /> : <Redirect to="/signin" />}</>
        )
      }
    />
  );
}

export default PrivateRoute;
