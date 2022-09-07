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
export const getPosts = async () => {
  const data = doc(db, "0828", "cards");
  const querySnapshot = await getDoc(data);
  console.log(querySnapshot.data());
  return querySnapshot.data();
};

// 데이터 실시간 확인
export const unsub = onSnapshot(doc(db, "0828", "cards"), (doc) => {
  console.log("Current data: ", doc.data());
});

// 데이터 저장하기
export const setPosts =async(state) => {
  await setDoc(doc(db, "0828", "cards"), {
    ...state
  })
}

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