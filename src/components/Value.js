class Value {
  view(vnode) {
    if (!vnode.attrs.hasValue) {
      return null;
    }
    return m('.sws-rating__value', vnode.attrs.value.toFixed(1));
  }
}

export default Value;
