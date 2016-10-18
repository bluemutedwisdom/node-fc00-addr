var os = require("os");

var addr = function () {
    var ifaces = os.networkInterfaces();
    var results = [];
    for (iface in ifaces) {
        ifaces[iface].forEach(function (el) {
            if (/^fc/.test(el.address)) {
                results.push(el.address);
            }
        });
    }
    return results;
};

module.exports = addr;
