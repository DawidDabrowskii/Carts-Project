import { useTitle } from '../../hooks/useTitle';
import { BackButton } from '../../components/backButton/BackButton';
import './PageNotFound.scss';

const PageNotFound = () => {
  useTitle(`Form`);

  return (
    <div className='not-found'>
      <BackButton />
      <h2>Ooops! This page does not exist!</h2>
    </div>
  );
};

export default PageNotFound;
