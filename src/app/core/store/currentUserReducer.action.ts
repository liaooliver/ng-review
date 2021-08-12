import { createAction, props } from '@ngrx/store';
import { User } from '../models/user.model';

export const setUser = createAction('[current User] setUser', props<User>());
export const removeUser = createAction('[current User] removeUser');