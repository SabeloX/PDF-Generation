const pdf = require("pdf-creator-node");
const fs = require("fs");

const html = fs.readFileSync("template.html", "utf8");

const options = {
    format: "A4",
    orientation: "portrait",
    border: "10mm",
    header: {
        height: "45mm",
        contents: '<div style="text-align: center;">Author: Sabelo Mtetwa</div>'
    },
    footer: {
        height: "28mm",
        contents: {
            first: 'Cover page',
            2: 'Second page', // Any page number is working. 1-based index
            default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
            last: 'Last Page'
        }
    }
};
const users = [
    {
        name: "Zonke",
        age: "26",
    },
    {
        name: "Nomafu",
        age: "26",
    },
    {
        name: "Yolisa",
        age: "22",
    },
];
const document = {
    html: html,
    data: {
        users: users,
    },
    path: "./users.pdf",
    type: "",
};

pdf
    .create(document, options)
    .then((res) => {
        console.log(res);
    })
    .catch((error) => {
        console.error(error);
    });