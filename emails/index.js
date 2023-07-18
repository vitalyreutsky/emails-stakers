const path = require("path");
const fs = require("fs");
const { minify } = require("html-minifier-terser");
const CSSInliner = require("css-inliner");

const inliner = new CSSInliner({
    directory: ".",
});

require("dotenv").config();
require("dotenv").config({ path: path.resolve(__dirname, ".env.local"), override: true });

(async () => {
    const html = fs.readFileSync(path.resolve(__dirname, process.env.TEMPLATE)).toString();
    const minified_html = await minify(html, { collapseWhitespace: true, minifyCSS: true });
    const inlined_html = await inliner.inlineCSSAsync(minified_html);

    fs.writeFileSync(path.resolve(__dirname, "inline.html"), inlined_html);
})();
