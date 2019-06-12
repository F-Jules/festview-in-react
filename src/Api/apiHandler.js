import axios from "axios";

// ------ ARTISTS ----------
export const getArtists = () =>
  axios.get("http://www.fest-view.com/api/artists");
export const getOneArtist = id =>
  axios.get(`http://fest-view.com/api/pages/${id}`);
// ------ FESTIVALS ----------
export const getFestivals = () =>
  axios.get("http://www.fest-view.com/api/festivals");
