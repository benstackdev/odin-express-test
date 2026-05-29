import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

/* 
These are technically CommonJS built-in variables that come with express(?), but we are using modules, so this is the workaround (with included imports above)
*/
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// I think using this would let you get static pages from URI in browser based on local path directory(?) --> YES (but the .html in the URI is necessary; there may be a utility to not have to do this?)
app.use("/", express.static(path.join(__dirname, "/pages")));

const options = {
  root: "./src/pages/",
  dotfiles: 'deny',
  headers: {
    'Content-Type': 'text/html'
  }
};

// We can use app.get() functions instead of app.use above to specify paths directly and return local files

// app.get("/", (req, res) => {
//   try {
//     res.status(200).sendFile("index.html", options);
//   } catch (err) {
//     console.error(err);
//   }
// });

// app.get("/about", (req, res) => {
//   try {
//     res.status(200).sendFile("about.html", options);
//   } catch (err) {
//     console.error(err);
//   }
// });

// app.get("/contact", (req, res) => {
//   try {
//     res.status(200).sendFile("contact.html", options);
//   } catch (err) {
//     console.error(err);
//   }
// });

// Handle any route that doesn't resolve - point to 404 page
app.use((req, res) => {
  res.status(404).sendFile("404.html", options);
});

const PORT = 3000;
app.listen(PORT, (error) => {
  if (error) throw error;
  console.log(`My first express app - listening on port ${PORT}`);
});