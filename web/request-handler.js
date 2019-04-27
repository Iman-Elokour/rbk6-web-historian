var path = require('path');
var archive = require('../helpers/archive-helpers');
var fs = require('fs');
// require more modules/folders here!

exports.handleRequest = function (req, res) {

fs.readFile(archive.paths.index, (err, data) => {
  if (err) throw err;
  res.end(data);
});

};
