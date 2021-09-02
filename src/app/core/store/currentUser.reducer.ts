import { createReducer, on } from '@ngrx/store';
import { setUser, removeUser } from './currentUserReducer.action';
import { User } from '../models/user.model';

const initUser: User = {} as User;

const _currentUserReducer = createReducer(
  initUser,
  on(setUser, (state, props) => {
    return props;
  }),
  on(removeUser, () => {
    return {} as User;
  })
);

export function currentUserReducer(state, action) {
  return _currentUserReducer(state, action);
}
