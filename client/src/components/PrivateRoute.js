import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { GlobalContext } from 'context/GlobalContext';
import Spinner from 'components/Spinner';

function PrivateRoute({ component: RouteComponent, ...rest }) {
  const { currentUser, isLoading } = useContext(GlobalContext);

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
