(function() {
  console = {};
  console.log = function(x) {Logger.log(x);};
  clog = console.log;
})();