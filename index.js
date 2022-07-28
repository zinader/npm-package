const { render } = require("prettyjson");
const data = require("./lib/data");

const renderOpts = {
    dashColor: "cyan",
    keysColor: "rainbow",
    stringColor: "blue",
};

module.exports = () => render(data, renderOpts);
