import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../store/reducers/root.reducer';

const store = createStore(
  rootReducer,
);

store.subscribe(() => store.getState())

export default store
