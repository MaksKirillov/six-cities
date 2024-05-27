import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { AuthorizationStatus } from '../../const';
import { logoutAction } from '../../store/api-action';
import { getAuthorizationStatus, getEmail } from '../../store/user-process/selectors';
import { getFavorites } from '../../store/favorite-process/selectors';

function Header(): JSX.Element {
  const dispatch = useAppDispatch();
  const email = useAppSelector(getEmail);
  const favoriteOffers = useAppSelector(getFavorites);
  const status = useAppSelector(getAuthorizationStatus);

  const isAuthed = (status === AuthorizationStatus.Auth);

  const onLogOut = () => {
    dispatch(logoutAction());
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to="/" className="header__logo-link header__logo-link--active" >
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width="81"
                height="41"
              />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                {isAuthed ? (
                  <Link to="/favourites" className="header__nav-link header__nav-link--profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">{email}</span>
                    <span className="header__favorite-count">{favoriteOffers.length}</span>
                  </Link>
                ) : (
                  <Link to="/login" className="header__login">Sign in</Link>
                )}
              </li>
              {isAuthed && (
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout" onClick={onLogOut}>Sign out</span>
                  </a>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
