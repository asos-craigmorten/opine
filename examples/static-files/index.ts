/**
 * Run this example using:
 * 
 *    deno run --allow-net --allow-read ./examples/static-files/index.ts
 * 
 *    if have the repo cloned locally OR
 * 
 *    deno run --allow-net --allow-read https://raw.githubusercontent.com/asos-craigmorten/opine/master/examples/static-files/index.ts
 * 
 *    if you don't!
 * 
 */

import { dirname, join } from "https://deno.land/std/path/mod.ts";
import { opine, serveStatic } from "../../mod.ts";

const app = opine();
const __dirname = dirname(import.meta.url);

// Opine on its own has no notion
// of a "file". The serveStatic()
// middleware checks for a file matching
// the `req.path` within the directory
// that you pass it. In this case "GET /js/app.js"
// will look for "./public/js/app.js".

app.use(serveStatic(join(__dirname, "public")));

// If you wanted to "prefix" you may use
// the mounting feature of serveStatic, for example
// "GET /static/js/app.js" instead of "GET /js/app.js".
// The mount-path "/static" is simply removed before
// passing control to the serveStatic() middleware,
// thus it serves the file correctly by ignoring "/static"
app.use("/static", serveStatic(join(__dirname, "public")));

// If you want to serve files from
// several directories, you can use serveStatic()
// multiple times! Here we're passing "./public/css",
// this will allow "GET /style.css" instead of "GET /css/style.css":
app.use(serveStatic(join(__dirname, "public", "css")));

app.listen({ port: 3000 });

console.log("listening on port 3000");
console.log("try:");
console.log("  GET /hello.txt");
console.log("  GET /js/app.js");
console.log("  GET /js/helper.js");
console.log("  GET /css/style.css");
console.log("try the files served under `static/`:");
console.log("  GET /static/hello.txt");
console.log("  GET /static/js/app.js");
console.log("  GET /static/js/helper.js");
console.log("  GET /static/css/style.css");
console.log("try the css served on the root:");
console.log("  GET /style.css");