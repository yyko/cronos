// add 0.5.1

var add = {};

add.slot = function(type){
  var sheet, slot_id, group_id, h, new_h;
  sheet = get.sheet('trigger slots');
  h = ssb.get_row(sheet, 3);
  group_id = add.group(type);
  new_h = _.extend(h, {group_id:group_id, slot_id:h.slot_id+1, timestamp: J_I(new Date())});
  ssb.on_top(sheet, new_h);
}

add.group = function(type){
  var sheet, vh, type, start_date, interval, group_id;
  interval = 1;
  type = type || 'A';
  start_date = J_I(new Date());
  sheet = get.sheet('groups');
  vh = ssb.get_vh(sheet);
  group_id = vh[0].group_id + 1;
  ssb.on_top(sheet, {group_id: group_id, rule_types: type, start_date: start_date});
  sheet = get.sheet(type);
  vh = ssb.get_vh(sheet);
  ssb.on_top(sheet, {group_id: group_id , interval: interval, start_date: start_date, measure:'day'});
  return group_id;
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

// add 0.5.1