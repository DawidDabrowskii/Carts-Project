import { Link } from 'react-router-dom';
import './BackButton.scss';

export const BackButton = () => {
  return (
    <Link to='/' className='go-back-btn'>
      Go Back
    </Link>
  );
};
