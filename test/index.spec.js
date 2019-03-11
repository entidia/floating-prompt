/* global describe, it, before */

import chai from 'chai';
import entidiaprompt from '../lib/entidiaprompt.js';

chai.use(require('chai-dom'));
chai.expect();

const expect = chai.expect;

// mocking local storage
global.window = {
  localStorage: {
    getItem: function(id) {
      return true;
    }
  }
};

describe('Given an instance of entidiaprompt', () => {
  before(() => {
    entidiaprompt({name:'GitNews', url:'https://www.entidiaprompt.com/posts/gitnews'});
  });
});
