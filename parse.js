var parse = {};

//::String-> Interval
parse.interval = function(s){
  var r, from, to;
  if (s == undefined || s == '' || s.indexOf('-') == -1 ) return {from:-1, to:-1};
  r = s.split('-').map(function(x){return x.trim()});
  from = time_to_minutes(r[0]);
  to = time_to_minutes(r[1]);
  if (isNaN(from) || isNaN(to)) return {from:-1, to:-1};
  if (to < from) to+= 24*60;
  return {from:from, to:to};
}