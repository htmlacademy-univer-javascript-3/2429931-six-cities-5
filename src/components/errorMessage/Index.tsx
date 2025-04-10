import { useAppSelector } from '../../hooks';
import './errorMessage.css';

export const ErrorMessage = (): JSX.Element | null => {
  const error = useAppSelector((state) => state.error);

  return (error)
    ? <div className='error-message'>{error}</div>
    : null;
};

