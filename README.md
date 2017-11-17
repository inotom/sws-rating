# SwsRating [![Build Status](https://travis-ci.org/inotom/sws-rating.svg?branch=master)](https://travis-ci.org/inotom/sws-rating)

This is a star rating Mithril.js component.

## Installation

```
$ npm install git://github.com/inotom/sws-rating.git#v1.0.0 --save-dev
```

## Sample Code

```js
import m from 'mithril';
import SwsRating from 'sws-rating';

m.mount(document.body, {
  view: () => {
    return m(SwsRating, {
      size: 30,
      color: '00cc99',
      bgColor: 'ffffff',
      stroke: '006633',
      max: 10,
      rate: 7.3,
      tabIndex: 1,
      onRateUpdate: (rateValue) => {
        console.log(rateValue);
      }
    });
  }
});
```

or

```html
<script src="mithril.js"></script>
<script src="sws-rating.min.js"></script>
<script>
m.mount(document.body, {
  view: () => {
    return m(SwsRating, {
      // ...
    });
  }
});
</script>
```

## Demo

[demo](http://demo.serendip.ws/sws-rating/)

## Options

| **Parameter**  | **Mandatory** | **Type** | **Default** | **Description**                                   |
| ---------------| ------------- | -------- | ----------- | ------------------------------------------------- |
| `size`         | optional      | Number   | `25`        | Rating stars image width/height size              |
| `color`        | optional      | String   | `ffcc00`    | Hex color of active rating stars                  |
| `bgColor`      | optional      | String   | `dddddd`    | Hex color of inactive rating stars                |
| `stroke`       | optional      | String   | `00000000`  | Hex color of rating stars outline                 |
| `readonly`     | optional      | Boolean  | `false`     | Make readonly mode                                |
| `max`          | optional      | Number   | `5`         | Rating stars count                                |
| `rate`         | optional      | Number   | `0`         | Initial rate value                                |
| `tabIndex`     | optional      | Number   | `0`         | Tab index value                                   |
| `onRateUpdate` | optional      | Function |             | Callback function that returns updated rate value |

## License

MIT

## Author

iNo
