import { AppPath, AuthorizationStatus } from '../../const';
import { Navigate } from 'react-router-dom';

type PrivateRouteProps = {
  authStatus: AuthorizationStatus;
  children: JSX.Element;
}
export const PrivateRoute = (props: PrivateRouteProps) => {
  const {authStatus, children} = props;

  return(
    authStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppPath.Login}/>
  );
};
