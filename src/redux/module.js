import { getPosts, getUser, setPosts } from "../api/apis";
import { addBoard, addCard } from "../lib/utils";

export const GET_POSTS = "GET_POSTS";
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
export const GET_POSTS_FAIL = "GET_POSTS_FAIL";
export const GET_USER = "GET_USER";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAIL = "GET_USER_FAIL";
export const ADD_BOARD = "ADD_BOARD";
export const ADD_CARD = "ADD_CARD";

const initialState = {
  // posts: { loading: false, data: null, error: null },
  posts: { data: null },
  post: {},
};

const initialUserState = {
  uid: null,
  photoURL: null,
  displayName: null,
};

// 미들웨어Fn
export const getPostsFn = () => async (dispatch) => {
  // dispatch({ type: GET_POSTS });
  try {
    const payload = await getPosts();
    dispatch({ type: GET_POSTS_SUCCESS, payload });
  } catch (e) {
    dispatch({ type: GET_POSTS_FAIL, payload: e });
  }
};

// post 미들웨어
export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: {
          // loading: true,
          data: null,
          // error: null,
        },
      };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: {
          // loading: false,
          data: action.payload,
          // error: null,
        },
      };
    case GET_POSTS_FAIL: {
      return {
        ...state,
        posts: {
          // loading: false,
          data: null,
          // error: action.payload,
        },
      };
    }
    case ADD_BOARD: {
      const AllBoard = state.posts.data.AllBoard;
      const newBoard = addBoard();
      AllBoard.push(newBoard);
      // console.log(AllBoard);
      // console.log(state);
      return {
        ...state,
        posts: {
          data: { AllBoard },
        },
      };
    }
    case ADD_CARD: {
      const AllBoard = state.posts.data.AllBoard;
      const { boardId, title, uid, displayName, photoURL } = action.payload;
      const selectedBoard = AllBoard.find((board) => board.id === boardId);
      // console.log(AllBoard);
      const newCard = addCard(title, title, uid, displayName, photoURL);
      selectedBoard.cards.push(newCard);
      console.log(AllBoard);
      return {
        ...state,
        posts: {
          data: { AllBoard },
        },
      };
    }
    default:
      return state;
  }
};

export const getLoginFn = (providerName) => async (dispatch) => {
  dispatch({ type: GET_USER });
  try {
    const userInfo = await getUser(providerName);
    dispatch({ type: GET_USER_SUCCESS, payload: userInfo });
  } catch (e) {
    dispatch({ type: GET_USER_FAIL, payload: e });
  }
};

// 리듀서
export const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
      };
    case GET_USER_SUCCESS:
      const user = action.payload.user;
      return {
        ...state,
        uid: user.uid,
        photoURL: user.photoURL,
        displayName: user.displayName,
      };
    case GET_USER_FAIL:
      console.log("failed!");
      return state;
    default:
      // console.log("default");
      return state;
  }
};
