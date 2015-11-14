import fs from 'fs'
import test from 'ava'
import postcss from 'postcss'
import reporter from 'postcss-reporter'
import shorthandExpand from '../'

test('postcss-shorthand-expand', t => {
  testFixture(t, 'input.css', 'output.css')
  t.end()
})

function fixture (name) {
  return fs.readFileSync('fixtures/' + name, 'utf8')
}

function testFixture (t, input, output) {
  const result = postcss([ shorthandExpand(), reporter() ])
      .process(fixture(input))

  t.same(result.css, fixture(output))
}
