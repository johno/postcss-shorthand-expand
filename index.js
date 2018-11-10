'use strict'

var postcss = require('postcss')
const {
  isShorthandProperty,
  expandShorthandProperty
} = require('css-property-parser');

module.exports = postcss.plugin('postcss-shorthand-expand', function () {
  return function removePrefixes (root, result) {
    root.walkRules(function (rule) {
      rule.walkDecls( function (declaration) {
        if (isShorthandProperty(declaration.prop)) {
          try {
            var expandedDecls = expandShorthandProperty(declaration.prop, declaration.value)

            Object.keys(expandedDecls).forEach(function (prop) {
              rule.insertBefore(declaration, { prop: prop, value: expandedDecls[prop] })
            })

            declaration.remove()
          } catch (e) {
            getExpansionFailureDescription(declaration, result)
          }
        }
      })
    })
  }
})

function getExpansionFailureDescription (decl, result) {
  result.warn(
    'postcss-shorthand-expand failed to expand a property ' +
    decl.prop + ': ' + decl.value + ';',
    { node: decl }
  )
}
