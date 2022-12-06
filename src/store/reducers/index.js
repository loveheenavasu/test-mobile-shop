import { combineReducers } from 'redux';
import authReducer from "./authReducer";
import { searchReducer } from "./searchReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    search: searchReducer,
    cart: cartReducer,
});

export default rootReducer;