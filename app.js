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
</html>

`;


console.log(html_to_rdfa(example, "http://data.lblod.info", ""));
