import axios from "axios";

export const getArtists = () => axios.get("http://fest-view.com/api/artists");
