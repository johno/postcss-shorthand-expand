# postcss-shorthand-expand [![Build Status](https://secure.travis-ci.org/johnotander/postcss-shorthand-expand.png?branch=master)](https://travis-ci.org/johnotander/postcss-shorthand-expand) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

Expand shorthand properties in your CSS.

Note: This currently only supports a [limited list] of shorthand properties:

- `background`
- `font`
- `padding`
- `margin`
- `border`
- `border-width`
- `border-style`
- `border-color`
- `border-top`
- `border-right`
- `border-bottom`
- `border-left`

## Installation

```bash
npm install --save postcss-shorthand-expand
```

## Usage

```javascript
var postcss = require('postcss')
var shorthandExpand = require('postcss-shorthand-expand')

postcss([ shorthandExpand() ]).process(myCss).css
```

#### Input

```css
.some-background {
  background: url(image.png) no-repeat #ff0;
}

.some-font {
  font: 16px / 1.2 sans-serif;
}
```

#### Output

```css
.some-background {
  background-image: url(image.png);
  background-repeat: no-repeat;
  background-color: #ff0;
}

.some-font {
  font-size: 16px;
  line-height: 1.2;
  font-family: sans-serif;
}
```

## Acknowledgements

* <https://github.com/kapetan/css-shorthand-expand>

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by John Otander ([@4lpine](https://twitter.com/4lpine)).

***

> This package was initially generated with [yeoman](http://yeoman.io) and the [p generator](https://github.com/johnotander/generator-p.git).
