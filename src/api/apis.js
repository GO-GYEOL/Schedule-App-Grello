import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInAnonymously,
  signInWithPopup,
} from "firebase/auth";
import { doc, getDoc, onSnapshot, setDoc } from "firebase/firestore";
import { db } from "../service/fbase";

// 카드 가져오기 API
export const getPosts = async (roomId) => {
  const data = doc(db, roomId, "room");
  const querySnapshot = await getDoc(data);
  console.log(querySnapshot.data());
  return querySnapshot.data();
};

// 데이터 실시간 확인
export const unsub = onSnapshot(doc(db, "0828", "room"), (doc) => {
  console.log("Current data: ", doc.data());
});

// 데이터 저장하기
export const setPosts = async (state, roomId) => {
  roomId &&
    (await setDoc(doc(db, roomId, "room"), {
      ...state,
    }));
};

// 로그인하기 API
export const getUser = async (ProviderName) => {
  const auth = getAuth();
  const GoogleProvider = new GoogleAuthProvider();
  const GithubProvider = new GithubAuthProvider();
  if (ProviderName === "Google") {
    const result = await signInWithPopup(auth, GoogleProvider);
    console.log(result);
    return result;
  }
  if (ProviderName === "Github") {
    const result = await signInWithPopup(auth, GithubProvider);
    console.log(result);
    return result;
  }
  if (ProviderName === "Anonymous") {
    const result = await signInAnonymously(auth);
    console.log(result);
    return result;
  }
};

// 방 만들기 API
export const setNewPosts = async (roomId) => {
  await setDoc(doc(db, roomId, "room"), {
    AllBoard: [
      {
        cards: [
          {
            title: "무슨 생각을 하고 계세요?",
            id: "12jalxcn",
            cover_url:
              "https://cdn.pixabay.com/photo/2022/09/02/19/04/sunflower-7428212_960_720.jpg",
            comments: [],
            displayName: "Guest",
            photoURL:
              "https://www.letsgoholiday.my/Content/Images/Icons/icon-guest.svg",
          },
        ],
        id: "ra12zx",
        title: "BRAINSTORM 🤔",
      },
      {
        cards: [
          {
            title: "오늘 할 일은 무엇인가요??",
            id: "ap0qas9n",
            cover_url: null,
            comments: [],
            displayName: "Guest",
            photoURL:
              "https://www.letsgoholiday.my/Content/Images/Icons/icon-guest.svg",
          },
        ],
        id: "zs108xk",
        title: "TODO 📚",
      },
      { cards: [], id: "lcmalw22", title: "DONE! 🙌🏽" },
      { cards: [], id: "as1910io", title: "DOING ⚙️" },
    ],
    backgroundColor: "#c395d3",
    backgroundUrl: null,
    roomId,
  });
};
