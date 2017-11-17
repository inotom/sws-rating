import m from 'mithril';
import Star from './Star.js';

const makeStars = (attrs) => {
  const max = attrs.max;
  const stars = [];
  for (let i = 0; i < max; i++) {
    stars.push(
      m(Star, Object.assign({
        index: i + 1
      }, attrs))
    );
  }
  return stars;
};

class Line {
  view(vnode) {
    return m('.sws-rating__line', makeStars(vnode.attrs));
  }
}

export default Line;
