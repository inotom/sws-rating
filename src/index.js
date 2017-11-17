import m from 'mithril';
import Line from './components/Line.js';
import Rate from './models/Rate.js';
import Value from './components/Value.js';
import insertStyle from './helpers/insertStyle.js';
import attr from './helpers/attr.js';

class SwsRating {
  constructor() {
    this.max = 5;
    this.rate = Rate.createNew();
    this._tmpRateValue = this.rate.get();
    this._isFocus = false;
    this.readonly = false;
    insertStyle('sws-rating-style');
  }
  oninit(vnode) {
    if (vnode.attrs.max) {
      this.max = vnode.attrs.max;
    }
    if (vnode.attrs.rate) {
      this.rate = Rate.createNew(vnode.attrs.rate, this.max);
      this._tmpRateValue = this.rate.get();
    }
    if (vnode.attrs.readonly) {
      this.readonly = vnode.attrs.readonly;
    }
  }
  onupdate(vnode) {
    if (!this.readonly && vnode.attrs.onRateUpdate) {
      if (this._tmpRateValue !== this.rate.get()) {
        vnode.attrs.onRateUpdate(this.rate.get());
        this._tmpRateValue = this.rate.get();
      }
    }
  }
  view(vnode) {
    return m('div', {
      tabindex: this.readonly ? false : attr(vnode.attrs.tabIndex, 0),
      onkeydown: (e) => {
        if (this._isFocus && (e.key === 'ArrowUp' || e.key === 'ArrowDown')) {
          e.preventDefault();
          e.stopPropagation();
        }
      },
      onkeyup: (e) => {
        if (!this.readonly) {
          switch (e.key) {
            case 'ArrowUp':
              this.rate.increment();
              break;
            case 'ArrowDown':
              this.rate.decrement();
              break;
          }
        }
      },
      onfocus: () => {
        this._isFocus = true;
      },
      onblur: () => {
        this._isFocus = false;
      },
      class: `sws-rating${this.readonly === true ? '--readonly' : ''}`
    }, [
      m(Line, {
        size: attr(vnode.attrs.size, 25),
        color: attr(vnode.attrs.color, 'ffcc00'),
        bgColor: attr(vnode.attrs.bgColor, 'dddddd'),
        stroke: attr(vnode.attrs.stroke, '00000000'),
        readonly: this.readonly,
        max: this.max,
        rate: this.rate
      }),
      m(Value, {
        hasValue: attr(vnode.attrs.hasValue, false),
        value: this.rate.getV()
      })
    ]);
  }
}

export default SwsRating;
