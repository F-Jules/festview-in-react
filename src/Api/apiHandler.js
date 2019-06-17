import axios from "axios";

// ------ GETALLFORSEARCH ----------
export const getAll = () =>
  axios.get("http://www.fest-view.com/api/test/pages");
// ------ GETALLFORSEARCH ----------
export const getAllPages = () =>
  axios.get("http://www.fest-view.com/api/test/pages/header");
// ------ GETONEPAGES ----------
export const getOnePage = id =>
  axios.get(`http://fest-view.com/api/pages/${id}`);
