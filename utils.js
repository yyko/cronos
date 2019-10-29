// utils 0.4.2

//IO()->Date
get_utc_bod = function(){
  //returns the beginning of current day in UTC zone;
  var date;
   date = new Date();
   return new Date(Date.parse(new Date(date.getFullYear(), date.getMonth(), date.getDate()).toISOString()));
}

compose = function(f, g) {
  return function(x) {
    return f(g(x));
  };
};


//::a->Bool
ndef = function(x){
  if (typeof x == 'undefined') return true;
  if (x == null) return true;
  else return false;
};

//::a->Bool
def = function(x){return !ndef(x);};//shortcut for == undefined;

function trim(x){return x.trim()}

function keys(x){return Object.keys(x)};

concat = function(a, b){return a.toString() + b.toString();}

function describe_day(date) {
  var description;
  description = {};
  description.day_of_month = date.getDate();
  description.day_of_week = date.getDay();
  description.weekday_of_month = get_weekday_of_month(date);
  description.last_weekday_of_month = is_last_weekday_of_month(date);
  description.last_day_of_month = is_last_day_of_month(date);
  return description;
}


function date_diff_in_years(date1, date2) {
  var diff, year1, year2;
  year1 = date1.getFullYear();
  year2 = date2.getFullYear();
  diff = year2 - year1;
  return diff;
}

function nearest_weekday(date, weekday) {
  var wd, res;
  wd = date.getDay();
  if (weekday >= wd) {res = new Date(date.getTime() + DAY_IN_MILIS*(weekday - wd));}
  else { res = new Date(date.getTime() + DAY_IN_MILIS*(7 - (wd - weekday)));
  }
  return res;
}

function time_to_minutes(s){
  var r, h, m;
  r = s.split(':');
  h = Number(r[0]);
  m = Number(r[1]);
  return h*60 + m;
}


function get_equal(matrix, field, value) {
  var n = matrix.length;
  var res = [];
  for (var i=0;i<n;i++) {
    if (matrix[i][field]==value) {
    res.push(matrix[i]);
    }
  }
  return res;
}

function date_diff_in_days(date1, date2) {
  var diff;
  diff = (dnt.begining_of_day(date2) - dnt.begining_of_day(date1))/DAY_IN_MILIS;
  return diff;
}

function match_year_interval(start_date, date, interval) {
  //including start_date
  var year, month, day, year_dif;
   day = start_date.getDate();
   if (day != date.getDate()) return false;
   month = start_date.getMonth();
   if (month != date.getMonth()) return false;
   year_dif = date_diff_in_years(start_date, date);
   year = start_date.getFullYear() + year_dif;
   if (year_dif > 0) {
     if (year_dif % interval) return false;
   }
   if (year != date.getFullYear()) return false;
   return true;
}


function match_week_interval(start_date, date, interval) {
  var wd, diff;
  wd = nearest_weekday(start_date, date.getDay());
  diff = (date.getTime() - wd.getTime())/DAY_IN_MILIS;
  return ((diff/7) % interval) == 0 ? true : false;
}

function match_day_interval(start_date, date, interval) {
  //including start_date
  return (Math.abs(date_diff_in_days(start_date, date) % interval)) == 0 ? true : false;
}


function quantity_of_week_days(date) {
  var last_day, i, begining, obj, day;
  obj = [];
  begining = dnt.first_day_of_month(date);
  last_day = new Date(dnt.last_day_of_month(date)).getDate();
  for(i=0;i<last_day;i++) {
    day = (new Date(begining + i * DAY_IN_MILIS).getDay());
    if (obj[day] == undefined) {
      obj[day] = 1;
    }
    else {
      obj[day] += 1;
    }
  }
  return obj;
}

function is_last_day_of_month(date) {
  var last_day;
  last_day = new Date(dnt.last_day_of_month(date));
  return date.getDate() == last_day.getDate();
}

function is_last_weekday_of_month(date) {
  var week_days, w_d_m;
  week_days = quantity_of_week_days(date);
  w_d_m = get_weekday_of_month(date);
  return week_days[date.getDay()] == w_d_m;
}


function get_weekday_of_month(date) {
  var last_day, i, begining, obj, day;
  obj = [];
  begining = dnt.first_day_of_month(date);
  last_day = date.getDate();
  for(i=0;i<last_day;i++) {
    day = (new Date(begining + i * DAY_IN_MILIS).getDay());
    if (obj[day] == undefined) {
      obj[day] = 1;
    }
    else {
      obj[day] += 1;
    }
  }
  return obj[date.getDay()];
}

function get_cons_weekdays() {
  return WEEKDAYS.map(function(a) {return a.substring(0,3);});
}

function post_new_object(object)  {
  var response ,txt;
  var url = "http:first.sedecilliard.com/ajax/ajax_port";
  var payload = {
    "object" : JSON.stringify(object),
    "query_type": 'new_object'

  };
  var options =
   {
     "method" : "post",
     "payload" : payload

   };
  clog(options);
  response = UrlFetchApp.fetch(url, options);
  var txt = response.getContentText();
  clog(txt);
  return txt;
}


function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}

// utils 0.4.2