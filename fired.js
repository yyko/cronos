//fired v0.21
//decor::Opened
var fired = {};

//::Rule->DayDescription->Bool
fired.A = function(rule, day_description) {
  var a, b;
  a = match_day_interval(rule.start_date, day_description.date, rule.interval);
  b = (rule.start_date == '') ? true : (rule.start_date <= day_description.date);
  return  a && b;
};

//::Trigger->Date->Bool
fired.a = function(x, date) {
  var a, b;
  a = match_day_interval(x.start_date, date, x.interval);
  b = (x.start_date == '') ? true : (x.start_date <= date);
  return  a && b;
};

//::Rule->DayDescription->Bool
fired.B = function(rule, day_description) {
  var cons_weekdays, d;
  cons_weekdays = get.cons_weekdays();
  d = cons_weekdays.indexOf(rule.week_day);
  if (rule.start_date == '') {return d == day_description.day_of_week;};
  if (d !== day_description.day_of_week) return false;
  if (rule.start_date > day_description.date) return false;
  return match_week_interval(rule.start_date, day_description.date, rule.interval == '' ? 1 : rule.interval);
};

//::Trigger->Date->DayDescription->Bool
fired.b = function(x, date, day) {
  var cons_weekdays, d;
  cons_weekdays = get.cons_weekdays();
  d = cons_weekdays.indexOf(x.week_day);
  if (x.start_date == '') {return d == day.day_of_week;};
  if (d !== day.day_of_week) return false;
  if (x.start_date > date) return false;
  return match_week_interval(x.start_date, date, x.interval == '' ? 1 : x.interval);
};

//::Rule->DayDescription->Bool
fired.C = function(rule, day_description) {
  var clause1, clause2;
  clause1 = rule.day_number == day_description.day_of_month;
  clause2 = (rule.start_date == '' ? true : rule.start_date <= day_description.date);
  return  clause1 && clause2;
};

//::Trigger->Date->DayDescription->Bool
fired.c = function(x, date, day) {return x.day_number == day.day_of_month && (x.start_date == '' ? true : x.start_date <= date);};

//::Rule->DayDescription->Bool
fired.D = function(rule, day_description) {
  var main, cons_weekdays, d;
  cons_weekdays = get.cons_weekdays();
  d = cons_weekdays.indexOf(rule.week_day);
  main = (rule.n == day_description.weekday_of_month && d == day_description.day_of_week);
  if (rule.start_date == '') {return main;};
  return main && rule.start_date <= day_description.date;
};

//::Trigger->Date->DayDescription->Bool
fired.d = function(x, date, day) {
  var main, cons_weekdays, d;
  cons_weekdays = get.cons_weekdays();
  d = cons_weekdays.indexOf(x.week_day);
  main = (x.n == day.weekday_of_month && d == day.day_of_week);
  if (x.start_date == '') {return main;};
  return main && x.start_date <= date;
};

//::Rule->DayDescription->Bool
fired.G = function(rule, day_description) {
  var main;
  main = match_year_interval(rule.start_date, day_description.date, rule.interval == '' ? 1 : rule.interval);
  if (rule.start_date == '') {return main;};
  return main && rule.start_date <= day_description.date;
};

//::Trigger->Date->Bool
fired.g = function(x, date) {
  var main;
  main = match_year_interval(x.start_date, date, x.interval == '' ? 1 : x.interval);
  if (x.start_date == '') {return main;};
  return main && x.start_date <= date;
};
//fired v0.21