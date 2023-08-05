

import {createStore} from 'redux';
import { MovieReducer } from '../reducer/MovieReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
export const Store = createStore(MovieReducer,composeWithDevTools);
