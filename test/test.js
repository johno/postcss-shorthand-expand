'use strict'

var fs = require('fs')
var test = require('tape')
var postcss = require('postcss')
var shorthandExpand = require('..')

test('postcss-shorthand-expand', function (t) {
  t.plan(1)

  testFixture(t, 'input.css', 'output.css')
})

function fixture (name) {
    return fs.readFileSync('test/fixtures/' + name, 'utf8')
}

function testFixture (t, input, output) {
    t.equal(
      postcss([ shorthandExpand() ])
        .process(fixture(input)).css,
      fixture(output)
    )
}
