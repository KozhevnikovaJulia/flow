import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { inputParameters_reducer } from './inputParameters_reducer';
import { app_reducer } from './app_reducer';
import { chart_reducer } from './chart_reducer';

const rootReducer = combineReducers({
  input: inputParameters_reducer,
  app: app_reducer,
  chart: chart_reducer,
});
const input = sessionStorage.getItem('input')
  ? JSON.parse(sessionStorage.getItem('input'))
  : {
    ta: '',
    period: '',
    frequency: '',
    mediumHrono: '15',
    maxShareOlv: '30%',
    };

const chart = sessionStorage.getItem('chart')
  ? JSON.parse(sessionStorage.getItem('chart'))
  : {
    allDataFromBack:[],
    chartData:[]
    };

const persistedState = { input, chart };

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, persistedState, composeEnhancers(applyMiddleware(thunkMiddleware)));

store.subscribe(() => {
  sessionStorage.setItem('input', JSON.stringify(store.getState().input));
  sessionStorage.setItem('chart', JSON.stringify(store.getState().chart));
});
