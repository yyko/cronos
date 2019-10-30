//fired v0.21
//decor::Opened
var fired = {};

//::Trigger->Date->Bool
fired.a = function(x, date){
  var a, b;
  a = match_day_interval(x.start_date, date, x.interval);
  b = (x.start_date=='')?true:(x.start_date<=date);
  return  a && b;
}

//::Trigger->Date->DayDescription->Bool
fired.b = function(x, date, day){
  var cons_weekdays, d;
  cons_weekdays = get.cons_weekdays();
  d = cons_weekdays.indexOf(x.week_day);
  if (x.start_date == '') {return d == day.day_of_week;};
  if (d !== day.day_of_week) return false;
  return match_week_interval(x.start_date, date, x.interval==''?1:x.interval && x.start_date<=date);
}

//::Trigger->Date->DayDescription->Bool
fired.c = function(x, date, day){return x.day_number == day.day_of_month && (x.start_date == ''?true:x.start_date<=date);}

//::Trigger->Date->DayDescription->Bool
fired.d = function(x, date, day){
  var main, cons_weekdays, d;
  cons_weekdays = get.cons_weekdays();
  d = cons_weekdays.indexOf(x.week_day);
  main = (x.n == day.weekday_of_month && d == day.day_of_week);
  if (x.start_date == '') {return main;};
  return main && x.start_date<=date;
}

//::Trigger->Date->Bool
fired.g = function(x, date){
  var main;
  clog('type g');
  main = match_year_interval(x.start_date, date, x.interval==''?1:x.interval);
  clog(main);
  if (x.start_date == '') {return main;};
  return main && x.start_date<=date;
}
//fired v0.21