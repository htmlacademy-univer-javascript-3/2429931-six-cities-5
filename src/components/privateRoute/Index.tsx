import { AppPath} from '../../const';
import { Navigate } from 'react-router-dom';

type PrivateRouteProps = {
  authStatus: boolean;
  children: JSX.Element;
}
export const PrivateRoute = (props: PrivateRouteProps) => {
  const {authStatus, children} = props;

  return(
    authStatus
      ? children
      : <Navigate to={AppPath.Login}/>
  );
};
