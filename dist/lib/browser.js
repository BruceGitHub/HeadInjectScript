'use strict';

require('babel-register')();

var jsdom = require('jsdom').jsdom;

var exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('<!doctype html><html><head><script src="test"></script></head><body></body></html>');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach(function (property) {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

documentRef = document;