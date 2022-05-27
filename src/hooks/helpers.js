const autofocus = (e) => {
  const val = e.target.value;
  e.target.value = "";
  e.target.value = val;
};

export { autofocus };
