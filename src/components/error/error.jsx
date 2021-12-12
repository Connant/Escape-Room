import { Link } from 'react-router-dom';
import * as S from './error.styled';

const Error = () => {
  return (
    <S.Error>
      <h1>
        404.
        <br />
        <small>Sorry, page not found</small>
      </h1>
      <Link to="/">Please, go back to main page</Link>
    </S.Error>
  );
}

export default Error;
