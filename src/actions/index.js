import axios from "axios";
import title from "../reducers/title";

export const plus = (num) => {
  return { type: "PLUS", payload: { num: num } };
};

export const minus = (num) => {
  return { type: "MINUS", payload: { num: num } };
};

export const asyncMinus = (num) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({ type: "MINUS", payload: { num: num } });
    }, 1000);
  };
};

export const changeTitle = (title) => {
  return { type: "CHANGE_TITLE", payload: { title: title } };
};

export const getJson = () => {
  return (dispatch) => {
    const url = "https://myjson.dit.upm.es/api/bins/jhl";
    axios.get(url).then((res) => {
      dispatch(changeTitle(res.data.member[0].name));
    });
  };
};
