export default `
.sws-rating {
  display: inline-flex;
}
.sws-rating__line {
  display: flex;
}
.sws-rating__star {
  display: block;
  position: relative;
  cursor: pointer;
}
.sws-rating__star-stroke {
  display: block;
  position: absolute;
  left: 0;
  top: 0;
}
.sws-rating__star-fill {
  display: block;
  position: relative;
}
.sws-rating--readonly .sws-rating__star {
  cursor: default;
}
`;
