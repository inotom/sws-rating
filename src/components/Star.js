import m from 'mithril';
import svg from './svg.js';
import getStarValue from '../helpers/getStarValue.js';

class Star {
  constructor() {
    this.value = 0;
  }
  oninit(vnode) {
    this.value = getStarValue(vnode.attrs.index, vnode.attrs.rate.getV());
  }
  view(vnode) {
    return m('.sws-rating__star', {
      onmouseover: () => {
        if (!vnode.attrs.readonly) {
          vnode.attrs.rate.setV(vnode.attrs.index);
        }
      },
      onmouseout: () => {
        if (!vnode.attrs.readonly) {
          vnode.attrs.rate.setV();
        }
      },
      onclick: () => {
        if (!vnode.attrs.readonly) {
          vnode.attrs.rate.set(vnode.attrs.index);
          vnode.attrs.rate.setV(vnode.attrs.index);
        }
      }
    }, [
      m('img', Object.assign({
        class: 'sws-rating__star-fill',
        src: svg(getStarValue(vnode.attrs.index, vnode.attrs.rate.getV()), vnode.attrs.color, vnode.attrs.bgColor),
        width: vnode.attrs.size,
        height: vnode.attrs.size,
        alt: ''
      })),
      m('img', {
        class: 'sws-rating__star-stroke',
        src: `data:image/svg+xml;charset=utf8, %3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2224%22 height=%2224%22 viewBox=%220 0 24 24%22%3E%3Cpolygon stroke=%22%23${vnode.attrs.stroke}%22 fill=%22%23000000%22 fill-opacity=%220.0%22 points=%2212,2 9.19,8.63 2,9.24 7.46,13.97 5.82,21 12,17.27 18.18,21 16.54,13.97 22,9.24 14.811,8.63 %22/%3E%3C/svg%3E`,
        width: vnode.attrs.size,
        height: vnode.attrs.size,
        alt: ''
      })
    ]);
  }
}

export default Star;
