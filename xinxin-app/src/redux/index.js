import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

let currentUser = localStorage.getItem("currentUser");
let Authorization = localStorage.getItem("Authorization");
let isLogin = false;
try {
  currentUser = JSON.parse(currentUser) || {};
  Authorization = JSON.parse(Authorization) || {};
} catch (err) {
  currentUser = {};
  Authorization = {};
}

if (Authorization) {
  isLogin = true;
}

const initState = {
  currentUser,
  Authorization,
  isLogin,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "login":
      // 数据持久化
      localStorage.setItem("currentUser", JSON.stringify(action.user));
      localStorage.setItem("Authorization", JSON.stringify(action.token));
      return {
        isLogin: true,
        currentUser: action.user,
        Authorization: action.token,
      };

    case "logout":
      localStorage.removeItem("currentUser");
      localStorage.removeItem("Authorization");
      return {
        currentUser: {},
        Authorization: {},
        isLogin: false,
      };

    case "update_user":
      const newState = {
        ...state,
        currentUser: {
          ...state.currentUser,
          ...action.user,
        },
        Authorization: {
          ...state.Authorization,
          ...action.Authorization,
        },
      };
      localStorage.setItem("currentUser", JSON.stringify(newState.currentUser));
      localStorage.setItem(
        "Authorization",
        JSON.stringify(newState.Authorization)
      );
      return newState;

    default:
      return state;
  }
};

const store = createStore(reducer, composeWithDevTools());

export default store;
