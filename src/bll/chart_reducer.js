const SET_ALL_DATA_FROM_BACK = 'SET_ALL_DATA_FROM_BACK';
const SET_CHART_DATA = 'SET_CHART_DATA ';
const SET_SELECTED_VALUE = 'SET_SELECTED_VALUE';

const initialState = {
  allDataFromBack:[],
  chartData:[],
  selectedValue:''
};

export const chart_reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_DATA_FROM_BACK:
      return { ...state, allDataFromBack: action.allDataFromBack };
    case SET_CHART_DATA:
      return { ...state, chartData: action.chartData };
    case SET_SELECTED_VALUE:
      return { ...state, selectedValue: action.selectedValue };
    default:
      return state;
  }
};

// action creators
export const setAllDataFromBack = allDataFromBack => ({ type: SET_ALL_DATA_FROM_BACK, allDataFromBack });
export const setChartData = chartData => ({ type: SET_CHART_DATA, chartData });
export const setSelectedValue = selectedValue => ({ type: SET_SELECTED_VALUE, selectedValue });