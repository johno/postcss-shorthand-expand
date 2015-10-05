'use strict'

var test = require('tape')
var postcssRemoveShorthands = require('..')

test('postcss-remove-shorthands', function (t) {
  t.plan(1)

  t.equal(postcssRemoveShorthands(), true)
})
