
# marked-xhtml

Add closing slash to tags like: `hr`, `br`, `img`, and `input`

# Usage

```js
import { marked } from "marked";
import { markedXhtml } from "marked-xhtml";

// or UMD script
// <script src="https://cdn.jsdelivr.net/npm/marked/lib/marked.umd.js"></script>
// <script src="https://cdn.jsdelivr.net/npm/marked-xhtml/lib/index.umd.js"></script>

marked.use(markedXhtml());

marked.parse("---");
// <hr/>
```
