
const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  user: null
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      localStorage.setItem('token', action.payload.token)
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true
      }
    case "USER_LOADED":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true
      }
    case "LOGIN_FAILED":
    case "LOGOUT_SUCCESS":
      localStorage.removeItem('token')
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        user: null
      }
    default:
      return state;
  }
};
