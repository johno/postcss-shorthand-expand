'use strict'

var fs = require('fs')
var test = require('tape')
var postcss = require('postcss')
var postcssRemoveShorthands = require('..')

test('postcss-remove-shorthands', function (t) {
  t.plan(1)

  testFixture(t, 'input.css', 'output.css')
})

function fixture (name) {
    return fs.readFileSync('test/fixtures/' + name, 'utf8')
}

function testFixture (t, input, output) {
    t.equal(
      postcss([ postcssRemoveShorthands() ])
        .process(fixture(input)).css,
      fixture(output)
    )
}
