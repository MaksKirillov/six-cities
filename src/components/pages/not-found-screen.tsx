import {Link} from 'react-router-dom';

function NotFoundScreen(): JSX.Element {
  return (
    <div>
      <h1>404 Not Found</h1>
      <p>Страница не найдена</p>
      <Link to="/">Вернуться назад</Link>
    </div>
  );
}

export default NotFoundScreen;
