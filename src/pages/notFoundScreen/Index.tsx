import { Link } from 'react-router-dom';

export const NotFoundScreen = () => (
  <section className="city_not-found">
    <h1>404. Page not found</h1>
    <Link to="/">Вернуться на главную</Link>
  </section>
);
