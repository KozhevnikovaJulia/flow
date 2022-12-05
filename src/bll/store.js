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
    mediumHrono: '',
    maxShareOlv: '',
    taItemsArr: [],
    periodItemsArr: [],
    frequencyItemsArr: [],
    mediumHronoItemsArr: [],
    maxShareOlvItemsArr: [],
    };

const chart = sessionStorage.getItem('chart')
  ? JSON.parse(sessionStorage.getItem('chart'))
  : {
    allDataFromBack:[],
    chartData:[],
    selectedValue:''
    };

const app = sessionStorage.getItem('app')
  ? JSON.parse(sessionStorage.getItem('app'))
  : {
    status: 'success',
    error: null,
    isInitialized: false,
    };

const persistedState = { input, chart, app };

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, persistedState, composeEnhancers(applyMiddleware(thunkMiddleware)));

store.subscribe(() => {
  sessionStorage.setItem('input', JSON.stringify(store.getState().input));
  sessionStorage.setItem('chart', JSON.stringify(store.getState().chart));
  sessionStorage.setItem('app', JSON.stringify(store.getState().app));
});
