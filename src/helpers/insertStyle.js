import css from './css.js';

export default (id) => {
  let el = document.getElementById(id);
  if (!el) {
    el = document.createElement('STYLE');
    el.textContent = css;
    el.id = id;
    document.head.appendChild(el);
  }
};
