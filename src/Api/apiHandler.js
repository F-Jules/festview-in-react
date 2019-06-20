import axios from "axios";

// ------ GETALLFORSEARCH ----------
export const getAllPages = () =>
  axios.get("http://www.fest-view.com/api/test/pages");
export const getAllPagesHeader = () =>
  axios.get("http://www.fest-view.com/api/pages/headers");
// ------ GETONEPAGES ----------
export const getOnePage = id =>
  axios.get(`http://fest-view.com/api/pages/${id}`);
export const getOnePageHeader = id =>
  axios.get(`http://fest-view.com/api/pages/${id}/headers`);
