import { marked } from 'marked';
import { markedXhtml } from '../src/index.js';

marked.use(markedXhtml());

marked('---');
