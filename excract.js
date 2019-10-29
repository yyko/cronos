//decor::Opened
var extract = {};

extract.active = function(xs){return xs.filter(function(x){return x[ACTIVE] == 1})};