import axios from "axios";
import conf from "../conf/conf.js";

const BASE_URL = conf.baseUrl;
const TMDB_TOKEN = conf.tmdbToken;

const headers = {
      Authorization: "bearer " + TMDB_TOKEN,
};

const fetchDataFromApi = async (url, params) =>{
      try {
            const {data} = await axios.get(BASE_URL + url, {
                  headers,
                  params,
            })

            return data;

      } catch (error) {
            console.log(error)
            return error
      }
}

export default fetchDataFromApi