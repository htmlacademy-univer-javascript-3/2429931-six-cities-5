import { FormEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginAction } from '../../store/api-actions';
import { AppPath, AuthorizationStatus } from '../../const';
import { LoadingScreen } from '../loadingScreen/Index';

type FormData = {
  email: string;
  password: string;
}

type FieldName = keyof FormData;

export const LoginScreen = (): JSX.Element => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });

  const handleFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target as HTMLInputElement & {name: FieldName};
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const dispatch = useAppDispatch();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if(formData.email && formData.password){
      dispatch(loginAction({
        login: formData.email,
        password: formData.password,
      }));
    }
  };

  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  const navigate = useNavigate();

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      navigate(AppPath.Main);
    }
  }, [authorizationStatus, navigate]);

  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return (
      <LoadingScreen />
    );
  }

  return(
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to="/">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action=""
              method="post"
              onSubmit={handleSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleFieldChange}
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password (1 or more number and symbol)"
                  pattern='(?=.*\d)(?=.*[a-zA-Z]).+'
                  onChange={handleFieldChange}
                  required
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to="#">
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};
