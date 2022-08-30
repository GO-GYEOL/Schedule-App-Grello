import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInAnonymously,
  signInWithPopup,
} from "firebase/auth";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../service/fbase";

// 카드 가져오기 API
export const getPosts = async () => {
  const data = doc(db, "0828", "cards");
  const querySnapshot = await getDoc(data);
  return querySnapshot.data();
};

export const unsub = onSnapshot(doc(db, "0828", "cards"), (doc) => {
  console.log("Current data: ", doc.data());
});

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

// 처음에만 get을 통해 데이터를 state에 저장하고 그걸 view 해주고, 그 다음에 데이터를 조작할 때는 리듀서로 state를 직접 바꿔주고, store가 변경될 때마다 호출되는 subscribe를 이용해 파이어베이스에 저장하면 되겠다!