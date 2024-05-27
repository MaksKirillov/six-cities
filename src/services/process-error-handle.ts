import { store } from '../store';
import { setError } from '../store/error-process/error-process';
import { clearErrorAction } from '../store/api-action';

export const processErrorHandle = (message: string): void => {
  store.dispatch(setError(message));
  store.dispatch(clearErrorAction());
};
