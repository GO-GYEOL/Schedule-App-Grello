export const addCard = (title, uid, displayName, photoURL) => ({
  id: Date.now().toString(),
  title,
  body: null,
  uid,
  displayName,
  photoURL,
});

export const addBoard = () => ({
  cards: [],
  id: Date.now().toString(),
  title: "new Board"
});
