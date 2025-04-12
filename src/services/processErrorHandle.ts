import { TIMEOUT_SHOW_ERROR } from '../const';
import { store } from '../store';
import { setError } from '../store/actions';

let errorTimeout: number | null = null;

export const processErrorHandle = (message: string): void => {
  store.dispatch(setError(message));

  if (errorTimeout){
    clearTimeout(errorTimeout);
  }

  errorTimeout = window.setTimeout(() => {
    store.dispatch(setError(null));
    errorTimeout = null;
  }, TIMEOUT_SHOW_ERROR);
};
