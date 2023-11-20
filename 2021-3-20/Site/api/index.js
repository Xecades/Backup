const request = require("request");
const fs = require("fs");

const filename = "count.txt";

module.exports = async (req, res) => {
    // res.setHeader("Content-Type", "");
    res.send(await fs.readFileSync(filename));
};
