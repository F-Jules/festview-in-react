import axios from "axios";

const uri = "http://fest-view.com";

// ------ POST MODULES ----------

export const createModuleContent = (id, datas) =>
  axios.post(`${uri}/api/pages/${id}/modules`, datas);
