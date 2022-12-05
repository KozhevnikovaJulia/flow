import { API } from '../dal/api';
import { setAllDataFromBack } from './chart_reducer'
import { setError, setStatus } from './app_reducer';

const SET_TA = 'SET_TA';
const SET_PERIOD = 'SET_PERIOD';
const SET_FREQUENCY = 'SET_FREQUENCY';
const SET_MEDIUM_HRONO = 'SET_MEDIUM_HRONO';
const SET_MAX_SHARE_OLV = 'SET_MAX_SHARE_OLV';
const SET_TA_ITEMS_ARR = 'SET_TA_ITEMS_ARR';
const SET_PERIOD_ITEMS_ARR = 'SET_PERIOD_ITEMS_ARR';
const SET_FREQUENCY_ITEMS_ARR = 'SET_FREQUENCY_ITEMS_ARR';
const SET_MEDIUM_HRONO_ITEMS_ARR = 'SET_MEDIUM_HRONO_ITEMS_ARR';
const SET_MAX_SHARE_OLV_ITEMS_ARR = 'SET_MAX_SHARE_OLV_ITEMS_ARR ';

const initialState = {
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
    case SET_TA_ITEMS_ARR:
      return { ...state, taItemsArr: action.taItemsArr };
    case SET_PERIOD_ITEMS_ARR:
      return { ...state, periodItemsArr: action.periodItemsArr };
    case SET_FREQUENCY_ITEMS_ARR:
      return { ...state, frequencyItemsArr: action.frequencyItemsArr };
    case SET_MEDIUM_HRONO_ITEMS_ARR:
      return { ...state, mediumHronoItemsArr: action.mediumHronoItemsArr };
    case SET_MAX_SHARE_OLV_ITEMS_ARR:
      return { ...state, maxShareOlvItemsArr: action.maxShareOlvItemsArr };
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
export const setTaItemsArr = taItemsArr => ({ type: SET_TA_ITEMS_ARR, taItemsArr });
export const setPeriodItemsArr = periodItemsArr => ({ type: SET_PERIOD_ITEMS_ARR, periodItemsArr });
export const setFrequencyItemsArr = frequencyItemsArr => ({ type: SET_FREQUENCY_ITEMS_ARR, frequencyItemsArr });
export const setMediumHronoItemsArr = mediumHronoItemsArr => ({ type: SET_MEDIUM_HRONO_ITEMS_ARR, mediumHronoItemsArr });
export const setMaxShareOlvItemsArr = maxShareOlvItemsArr => ({ type: SET_MAX_SHARE_OLV_ITEMS_ARR, maxShareOlvItemsArr });


export const setStartData = () => async dispatch => {
  try {
    dispatch(setStatus('loading'));
    // let TAData = [];
    // const response = await API.get_media(JSON.stringify({ project: "nspk" })) 
    // for (const data of response.data.TA) {
    //   TAData.push(data.TA);
    // }
    dispatch(setAllDataFromBack());    
    dispatch(setTaItemsArr(['All 25-45 BC', 'W 25-55 BC','M 20-45 BC']));
    dispatch(setPeriodItemsArr(['март', 'август', 'октябрь']));
    dispatch(setFrequencyItemsArr(['1', '2', '3', '4', '5', '6', '7', '8', '9']));
    dispatch(setMediumHronoItemsArr(['5', '10', '15', '20', '25', '30']));
    dispatch(setMaxShareOlvItemsArr(['20%', '25%', '30%', '35%', '40%']));
    dispatch(setMediumHrono('5'));
    dispatch(setMaxShareOlv('20%'));
    dispatch(setStatus('success'));
  } catch (error) {
    dispatch(setError(error.message));
  }
};
