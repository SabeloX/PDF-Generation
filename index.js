const pdf = require("pdf-creator-node");
const fs = require("fs");

const html = fs.readFileSync("template.html", "utf8");