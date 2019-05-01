const istanbul = require("istanbul");
const util = require("util");

function KandinskiJSReport(opts) {
  istanbul.Report.call(this);
  this.outDir = (opts || {}).outDir || "__logs__/";
}

KandinskiJSReport.TYPE = "kjs";
util.inherits(KandinskiJSReport, istanbul.Report);

istanbul.Report.mix(KandinskiJSReport, {
  synopsis: function() {
    return "KandinskiJS reporter for CSS files";
  },
  writeReport: function(collector, sync) {
    var handler = this.handleDone.bind(this);
    this.inProgress = 1;
    const report = istanbul.Report.create("lcov", {
      dir: `./${outDir}`
    });
    const Collector = istanbul.Collector;
    const collector = new Collector();
    //collector.add();
    report.on("done", handler);
    report.writeReport(collector);
  },
  handleDone: function() {
    this.emit("done");
  }
});
module.exports = KandinskiJSReport;
