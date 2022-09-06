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
export const ON_DRAG_END = "ON_DRAG_END";

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

// post 리듀서
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
    case ON_DRAG_END: {
      const { destination, source, type } = action.payload;
      if (type === "boards") {
        const [moved] = state.posts.data.AllBoard.splice(source.index, 1);
        state.posts.data.AllBoard.splice(destination.index, 0, moved);
        return state;
        // 여기서는 왜 그냥 return state를 하면 정상적으로 리렌더링이 되는거지?? 얕은비교일텐데.
      }
      if (type === "cards") {
        const boards = state.posts.data.AllBoard;
        const sourceBoard = boards.find(
          (board) => board.id === source.droppableId
        );
        const destineBoard = boards.find(
          (board) => board.id === destination.droppableId
        );
        const moved = sourceBoard.cards[source.index];
        sourceBoard.cards.splice(source.index, 1);
        destineBoard.cards.splice(destination.index, 0, moved);
        return state;
      }
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
      const newCard = addCard(title, uid, displayName, photoURL);
      selectedBoard.cards.push(newCard);
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
        photoURL: user.photoURL
          ? user.photoURL
          : "https://www.letsgoholiday.my/Content/Images/Icons/icon-guest.svg",
        displayName: user.displayName ? user.displayName : "Guest",
      };
    case GET_USER_FAIL:
      console.log("failed!");
      return state;
    default:
      // console.log("default");
      return state;
  }
};
