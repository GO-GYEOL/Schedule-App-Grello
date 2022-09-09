export const addCard = (title, uid, displayName, photoURL) => ({
  id: Date.now().toString(),
  title,
  body: null,
  uid,
  displayName,
  photoURL,
  comments: [],
  cover: null,
  color:null,
});

export const addBoard = () => ({
  cards: [],
  id: Date.now().toString(),
  title: "new Board",
});

export const addComment = ({ uid, photoURL, displayName, body }) => ({
  id: Date.now().toString(),
  body: body,
  photoURL: photoURL,
  displayName: displayName,
  uid: uid,
});
