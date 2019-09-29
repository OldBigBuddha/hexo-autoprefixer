'use strict';

require('chai').use(require('chai-as-promised')).should();
const prefixer = require('../lib/filter');

const unprefixed = 'div { user-select: none; }';
const prefixed = 'div { -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; }';

describe('hexo-autoprefixer', () => {
  it('should prefix fullscreen with no excludes', () => {
    const ctx = {
      config: {
        autoprefixer: {
          exclude: null
        }
      }
    };
    const newCSS = prefixer.call(ctx, unprefixed, {
      path: '/usr/foo/bar/baz.css'
    });

    newCSS.should.become(prefixed);
  });

  it('should prefix fullscreen with string exclude', () => {
    const ctx = {
      config: {
        autoprefixer: {
          exclude: '*.styl'
        }
      }
    };
    const newCSS = prefixer.call(ctx, unprefixed, {
      path: '/usr/foo/bar/baz.css'
    });

    newCSS.should.become(prefixed);
  });
});
