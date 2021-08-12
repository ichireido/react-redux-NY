export const plus = (num) => {
  return { type: "PLUS", payload: { num: num } };
};

export const minus = (num) => {
  return { type: "MINUS", payload: { num: num } };
};

export const asyncMinus = (num) => {
  setTimeout(() => {
    return { type: "MINUS", payload: { num: num } };
  }, 1000);
};
