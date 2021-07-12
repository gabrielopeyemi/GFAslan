import {createStore, compose, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import devToolsEnhancer from 'remote-redux-devtools';
import {persistReducer} from 'redux-persist';
import {createLogger} from 'redux-logger';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AllReducers from '../Reducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['AuthReducer', 'UsersChannelsReducer'],
};
const persistedReducer = persistReducer(persistConfig, AllReducers);
// let composeEnhancer = compose;
// const composeEnhancer = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||  compose;
const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});
const store: any = createStore(
  persistedReducer,
  composeEnhancers(
    applyMiddleware(createLogger()),
    // other store enhancers if any
  ),
);
console.log({Store: store.getState()});

export default store;
