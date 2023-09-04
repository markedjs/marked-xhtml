import { marked } from 'marked';
import { markedXhtml } from '../src/index.js';

describe('xhtml', () => {
  beforeEach(() => {
    marked.setOptions(marked.getDefaults());
  });

  test('hr', () => {
    marked.use(markedXhtml());
    expect(marked.parse('---')).toMatchInlineSnapshot(`
"<hr/>
"
`);
  });

  test('br', () => {
    marked.use(markedXhtml());
    marked.use({ breaks: true });
    expect(marked.parse('add\nbreak')).toMatchInlineSnapshot(`
"<p>add<br/>break</p>
"
`);
  });

  test('checkbox', () => {
    marked.use(markedXhtml());
    expect(marked.parse('- [x] checkbox')).toMatchInlineSnapshot(`
"<ul>
<li><input checked="" disabled="" type="checkbox"/>checkbox</li>
</ul>
"
`);
  });

  test('image', () => {
    marked.use(markedXhtml());
    expect(marked.parse('![image](test.png)')).toMatchInlineSnapshot(`
"<p><img src="test.png" alt="image"/></p>
"
`);
  });
});
