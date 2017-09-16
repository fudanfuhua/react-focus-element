# react-focus-element

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Travis CI build status](https://img.shields.io/travis/danawoodman/react-fontawesome.svg)](https://travis-ci.org/danawoodman/react-fontawesome)
[![Dependency Status](https://img.shields.io/david/danawoodman/react-fontawesome.svg)](https://david-dm.org/danawoodman/react-fontawesome)
[![View on npm](https://img.shields.io/npm/dm/react-fontawesome.svg)](https://www.npmjs.com/package/react-fontawesome)
[![View on npm](https://img.shields.io/npm/v/react-fontawesome.svg)](https://www.npmjs.com/package/react-fontawesome)

> A React component working use "contenteditable element" to fix focus bug on iphone, mac, and chrome(webkit kernel browser).


## Install

```
npm install --save react-focus-element
```

*Note: This component can work on most platform and most browser*

## Usage

```js
var React = require('react');
var FocusElement = require('react-focus-element');

React.render(<FocusElement onInput={(e) => {}} />, document.body);
```

## Examples

```js
var React = require('react');
var FocusElement = require('react-focus-element');

var MyComponent = React.createClass({
  render: function () {
    return (
        <FocusElement
          id="publish-message__title"
          className={className}
          onInput={(e) => {this.handleArticleContentChange('title', e.target)}}
        />
    );
  }
});
```

## Contributing

Pull requests welcome! 

Run the test suite with `npm test` and format your code with `npm run format`. Make sure tests are passing and that you write tests for new features and document changes to the API with updates to the JSDocs.

Before you submit your pull request, run `npm run dist` to build the project and commit the changes.


## License

[MIT](license) &copy; [fudanfuhua][author]


[author]: https://github.com/fudanfuhua
