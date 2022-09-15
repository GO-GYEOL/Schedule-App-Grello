import swal from "sweetalert";

export const addCard = (title, uid, displayName, photoURL) => ({
  id: Date.now().toString(),
  title,
  body: null,
  uid,
  displayName,
  photoURL,
  comments: [],
  cover_url: null,
  cover_color: null,
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

export const colors = [
  { color: "green", rgb: "#7bc76c" },
  { color: "yellow", rgb: "#f6dd29" },
  { color: "orange", rgb: "#ffaf40" },
  { color: "red", rgb: "#ef7665" },
  { color: "purple", rgb: "#c395d3" },
  { color: "blue", rgb: "#5ba4cf" },
  { color: "skyblue", rgb: "#28cce5" },
  { color: "lightgreen", rgb: "#6deba9" },
  { color: "pink", rgb: "#ff8ed4" },
  { color: "indigo", rgb: "#172b4c" },
  { color: "null", rgb: null },
];

export const backgroundImages = [
  "https://images.wallpaperscraft.com/image/single/house_windows_building_365283_2560x1440.jpg",
  "https://images.wallpaperscraft.com/image/single/tower_lights_buildings_365305_2560x1440.jpg",
  "https://images.wallpaperscraft.com/image/single/pattern_dots_shapes_364056_2560x1440.jpg",
  "https://images.wallpaperscraft.com/image/single/tower_skyscrapers_city_359519_2560x1440.jpg",
  "https://images.wallpaperscraft.com/image/single/palm_tree_sky_garland_358918_2560x1440.jpg",
  "https://images.wallpaperscraft.com/image/single/paint_strokes_texture_358813_2560x1440.jpg",
  "",
];

export const coverImages = [
  "https://cdn.pixabay.com/photo/2022/06/21/19/01/coast-7276345_960_720.jpg",
  "https://cdn.pixabay.com/photo/2022/08/17/04/07/tree-7391504_960_720.jpg",
  "https://cdn.pixabay.com/photo/2022/09/02/19/04/sunflower-7428212_960_720.jpg",
  "https://cdn.pixabay.com/photo/2022/08/18/14/52/maple-leaves-7395109_960_720.jpg",
  "https://cdn.pixabay.com/photo/2022/06/29/17/47/coffee-7292250_960_720.jpg",
  "https://cdn.pixabay.com/photo/2022/08/31/11/01/kangaroo-7423042_960_720.jpg",
];

export const warning = () =>
  swal("한번 삭제하면 복구할 수 없어요. 삭제할까요?", {
    buttons: {
      No: true,
      Yes: true,
    },
  });
