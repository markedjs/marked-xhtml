export function markedXhtml() {
  // extension code here

  return {
    useNewRenderer: true,
    renderer: {
      hr(...args) {
        return addSlash(this, 'hr', ...args);
      },
      br(...args) {
        return addSlash(this, 'br', ...args);
      },
      image(...args) {
        return addSlash(this, 'image', ...args);
      },
      checkbox(...args) {
        return addSlash(this, 'checkbox', ...args);
      }
    }
  };
}

function addSlash(renderer, name, ...args) {
  const html = renderer.constructor.prototype[name].call(renderer, ...args);
  // add slash before last `>`
  return html.replace(/>[^>]*$/, '/$&');
}
