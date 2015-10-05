'use strict'

var postcss = require('postcss')
var isShorthand = require('is-css-shorthand')
var shorthandExpand = require('css-shorthand-expand')

module.exports = postcss.plugin('postcss-remove-prefixes', function () {
  return function removePrefixes (root, result) {
    root.walkRules(function (rule) {
      rule.walkDecls( function (declaration) {
        if (isShorthand(declaration.prop) && isSupportedShorthand(declaration.prop)) {
          try {
            var expandedDecls = shorthandExpand(declaration.prop, declaration.value)
          } catch (e) {
            console.log(declaration.value)
            console.log(declaration)
            console.log(e)
            throw e
            return
          }
          Object.keys(expandedDecls).forEach(function (prop) {
            rule.insertBefore(declaration, { prop: prop, value: expandedDecls[prop] })
          })

          declaration.remove()
        }
      })
    })
  }
})

// css-shorthand-expand doesn't yet support all shorthands
function isSupportedShorthand (shorthand) {
  return ['background', 'font', 'padding', 'margin', 'border', 'border-width',
          'border-style', 'border-color', 'border-top', 'border-right', 'border-left',
          'border-bottom'].indexOf(shorthand) >= 0
}
