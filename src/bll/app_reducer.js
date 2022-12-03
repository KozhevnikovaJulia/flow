import { usersData } from '../assets/data/users';

const SET_STATUS = 'SET_STATUS';
const SET_ERROR = 'SET_ERROR';
const SET_IS_INITIALIZED = 'SET_IS_INITIALIZED';

const initialState = {
  status: 'success',
  error: null,
  isInitialized: false,
};

export const app_reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STATUS:
      return { ...state, status: action.status };
    case SET_ERROR:
      return { ...state, error: action.error };
    case SET_IS_INITIALIZED:
      return { ...state, isInitialized: action.isInitialized };
    default:
      return state;
  }
};

// action creators
export const setStatus = status => ({ type: SET_STATUS, status });
export const setError = error => ({ type: SET_ERROR, error });
export const setInitialized = isInitialized => ({ type: SET_IS_INITIALIZED, isInitialized });

//thunk creators
export const signIn = (userEmail, userPassword) => async dispatch => {
  const currentUser = usersData.find(item => item.userEmail === userEmail && item.userPassword === userPassword);
  currentUser && dispatch(setInitialized(true));

  localStorage.setItem(
    'app',
    JSON.stringify({
      timestamp: Date.now(),
    })
  );
};
