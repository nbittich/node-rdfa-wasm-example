const { html_to_rdfa } = require('@nbittich/rdfa-wasm');
const example = `
<!doctype html>
<html>
  <head>
    <title>Test 0224</title>
  </head>
  <body>
    <div about="">
      <ol rel="rdf:value" inlist="">
        <li><a href="foo">Foo</a></li>
        <li><a href="bar">Bar</a></li>
      </ol>
    </div>
  </body>
</html>`;

/*
 * @param { string } html - The HTML input string to parse.
 * @param { string } base - The base URI to resolve relative URLs within the HTML document.If empty, defaults to the document's base URL.
 * @param { string } well known prefix - For skolemization (optional)
 */
console.log(html_to_rdfa(example, "", ""));
