//decor::Namespaced
(function() {
  var trigger;

  trigger = function(a) {
    var res;
    res = JSON.parse(JSON.stringify(a));
    res[FIRED] = function() {clog('fired');};
    return res;
  };
  make = {};
  make.trigger = trigger;
})();