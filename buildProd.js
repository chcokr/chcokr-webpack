var appRoot = require('app-root-path');
var webpack = require('webpack');

var config = require(appRoot.resolve('/webpack.config.jsx'));
var compiler = webpack(config);

compiler.run(function (err, stats) {
  compiler.purgeInputFileSystem();

  if(err) {
    lastHash = null;
    console.error(err.stack || err);
    if(err.details) console.error(err.details);
    if(!options.watch) {
      process.on("exit", function() {
        process.exit(1);
      });
    }
    return;
  }

  var outputOptions = {
    colors: true
  };
  process.stdout.write(stats.toString(outputOptions) + "\n");
  process.exit(0);
});
