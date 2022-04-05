export const timeFunction = () => {
  let date = new Date();
  let now = new Date(date.getTime() - date.getTimezoneOffset() * 60000)
    .toISOString()
    .split('.', 1);

  return now[0];
};
