export const getStorage = async (key: string) => {
  const data = localStorage.getItem(key);
  return data;
};

export const setStorage = async (key: string, value: string) => {
  return localStorage.setItem(key, value);
};

export const removeStorage = async (key: string) => {
  return localStorage.removeItem(key);
};
