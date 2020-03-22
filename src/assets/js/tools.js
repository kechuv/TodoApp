const debounce = (fn, delay) => {
  let inDebounce;
  return function() {
    clearTimeout(inDebounce);
    const context = this;
    const args = arguments;
    inDebounce = setTimeout(() => fn.apply(context, args), delay);
  }
}

export {
  debounce
};