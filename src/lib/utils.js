export const addCard = (title, uid, displayName, photoURL) => ({
  id: Date.now(),
  title,
  body: null,
  uid: uid,
  userName: displayName,
  photoURL: photoURL,
});

export const addBoard = () => ({
  cards: [],
  id: Date.now(),
  title: "new Board"
});
