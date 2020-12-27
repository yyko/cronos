//group v0.2
var group = {};

group.by = {};

//::[Trigger]->String->GroupedVector
group.by.field = function(xs, field) {
  var res;
  res = {};
  xs.forEach(function(x) {
    if (res[x[field]] == undefined) res[x[field]] = [];
    res[x[field]].push(x);
  });
  return res;
};
//group v0.2