// add 0.5.0

var add = {};

add.group = function(){
  var sheet, vh, type, start_date, interval;
  interval = 1;
  type = 'A';
  start_date = J_I(new Date());
  //sheet = get.sheet('groups');
  //vh = ssb.get_vh(sheet);
  //ssb.on_top(sheet, {group_id: vh[0].group_id + 1 , rule_types: type, start_date: start_date});
  sheet = get.sheet(type);
  vh = ssb.get_vh(sheet);
  ssb.on_top(sheet, {group_id: vh[0].group_id + 1 , interval: interval, start_date: start_date, measure:'day'});
}

//:Date->DayDescription
add.details = function(date){
  var h;
  h = {};
  h.date = date;
  h.day_of_month = date.getDate();
  h.day_of_week = date.getDay();
  h.weekday_of_month = get_weekday_of_month(date);
  h.last_weekday_of_month = is_last_weekday_of_month(date);
  h.last_day_of_month = is_last_day_of_month(date);
  return h;
}

// add 0.5.0