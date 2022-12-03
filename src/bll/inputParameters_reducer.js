import { API } from '../dal/api';
import { setAllDataFromBack } from './chart_reducer'
import { setError, setStatus } from './app_reducer';

const SET_TA = 'SET_TA';
const SET_PERIOD = 'SET_PERIOD';
const SET_FREQUENCY = 'SET_FREQUENCY';
const SET_MEDIUM_HRONO = 'SET_MEDIUM_HRONO';
const SET_MAX_SHARE_OLV = 'SET_MAX_SHARE_OLV';

const initialState = {
  ta: '',
  period: '',
  frequency: '',
  mediumHrono: '15',
  maxShareOlv: '30 %',
};

export const inputParameters_reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TA:
      return { ...state, ta: action.ta };
    case SET_PERIOD:
      return { ...state, period: action.period };
    case SET_FREQUENCY:
      return { ...state, frequency: action.frequency };
    case SET_MEDIUM_HRONO:
      return { ...state, mediumHrono: action.mediumHrono };
    case SET_MAX_SHARE_OLV:
      return { ...state, maxShareOlv: action.maxShareOlv };
    default:
      return state;
  }
};

// action creators
export const setTa = ta => ({ type: SET_TA, ta });
export const setPeriod = period => ({ type: SET_PERIOD, period });
export const setFrequency = frequency => ({ type: SET_FREQUENCY, frequency});
export const setMediumHrono = mediumHrono => ({ type: SET_MEDIUM_HRONO, mediumHrono });
export const setMaxShareOlv = maxShareOlv => ({ type: SET_MAX_SHARE_OLV, maxShareOlv });


export const setStartData = () => async dispatch => {
  try {
    dispatch(setStatus('loading'));
    // let TAData = [];
    // const response = await API.get_media(JSON.stringify({ project: "nspk" })) 
    // for (const data of response.data.TA) {
    //   TAData.push(data.TA);
    // }
    dispatch(setAllDataFromBack());    
    dispatch(setStatus('success'));
  } catch (error) {
    dispatch(setError(error.message));
  }
};
