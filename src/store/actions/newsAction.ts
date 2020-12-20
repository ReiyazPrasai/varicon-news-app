

import { get } from "../../utils/apiUtil";
import { GET_NEWS } from "../types";

const API_KEY = process.env.REACT_APP_NEWS_API_KEY

export const getNews = () => {
  return get(
    `http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API_KEY}`,
    GET_NEWS
  );
};
