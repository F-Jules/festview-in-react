import axios from "axios";

const uri = "http://fest-view.com";

// ------ GET ALL HEADERS ----------

export const getAllPagesHeader = () => axios.get(`${uri}/api/pages/headers`);

// ------ GET ALL ----------

export const getAllPages = () => axios.get(`${uri}/api/test/pages`);

// ------ GET ONE PAGES HEADER ----------

export const getOnePageHeader = id =>
  axios.get(`${uri}/api/pages/${id}/headers`);

// ------ GET ONE PAGES ----------

export const getOnePage = id => axios.get(`${uri}/api/pages/${id}`);

// ------ GET COMP INFOS ----------

export const getOnePageComp = (id, title) =>
  axios.get(`${uri}/api/pages/${id}/${title}`);
