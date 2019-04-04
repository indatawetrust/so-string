import test from 'ava';
import s from '.'

test('test', t => {
  
  t.is(
    s('hElLo WÖrLD', 'slugify'),
    'hello-world'
  )

  t.is(
    s('border-color', 'camelize'),
    'borderColor'
  )

  t.is(
    s('<div><h1>hello</h1></div>', 'escapeHTML'),
    '&lt;div&gt;&lt;h1&gt;hello&lt;/h1&gt;&lt;/div&gt;'
  )

  t.is(
    s('the_humanize_string_method', 'humanize'),
    'The humanize string method'
  )

  t.is(
    s('I said ooh girl', 'count', 'o'),
    2
  )

})
