import { Link } from 'react-router-dom';
import { AppPath, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';

export const Header = () => {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const offers = useAppSelector((state) => state.favoriteOffers);

  const isAuth = authorizationStatus === AuthorizationStatus.Auth;
  const dispatch = useAppDispatch();

  const handleLogoutClick = (evt: React.MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  return(
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to='/' className="header__logo-link">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {isAuth
                ?
                <>
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile" to={AppPath.Favorites}>
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                      <span className="header__favorite-count">{offers.length}</span>
                    </Link>
                  </li>
                  <li className="header__nav-item">
                    <Link
                      className="header__nav-link"
                      to={AppPath.Main}
                      onClick={handleLogoutClick}
                    >
                      <span className="header__signout">Log out</span>
                    </Link>
                  </li>
                </>
                :
                <li className="header__nav-item">
                  <Link className="header__nav-link" to={AppPath.Login}>
                    <span className="header__signout">Sign in</span>
                  </Link>
                </li>}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
