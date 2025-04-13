import { AppPath, AuthorizationStatus} from '../../const';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';

type PrivateRouteProps = {
  children: JSX.Element;
}

export const PrivateRoute = ({children}: PrivateRouteProps) => {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isAuthStatus = authorizationStatus === AuthorizationStatus.Auth;

  return(
    isAuthStatus
      ? children
      : <Navigate to={AppPath.Login}/>
  );
};
