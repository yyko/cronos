//get v0.2
//decor::Open
var get = {};

get.state = function(key_value_sheet, slots_sheet){
  var m, res;
  m = key_value_sheet.getDataRange().getValues().slice(1);
  res = {};
  m.forEach(function(r){res[r[0]] = r[1]});
  res.slots = get.slots(slots_sheet);
  return res;
}

//::IO() -> [GeneratorSlot]
get.slots = function(sheet) {
  var m, headers, vh;
  sheet = sheet || get.sheet(SLOTS_SH);
  m =  ssa.get_matrix(sheet, 1);
  headers = m.shift();
  return mp.m_to_vh(m, headers);
}

//::IO -> [Trigger]
get.triggers = function(){
  var e_sheets, triggers_e_sheets;
  e_sheets = SpreadsheetApp.getActive().getSheets().map(function(sheet){return {name:sheet.getName(), sheet:sheet}});
  triggers_e_sheets = e_sheets.filter(function(e_sheet){return /^[A-Z]$/.test(e_sheet.name)});//Sheets with one uppercase ASCII character
  return triggers_e_sheets.map(function(e_sheet){
    var vh;
    vh =  ssb.get_vh(e_sheet.sheet);
    vh.forEach(function(h){
      h[TYPE] = e_sheet.name.toLowerCase();
      if (h.atoms == undefined) h.atoms = [];
      h.atoms.push(h);
    });
    return vh;
  })
  .reduce(function(a, b){return a.concat(b)}, []);
}

//::IdGroupedTriggers->Date->[Trigger]
get.fired_groups = function (triggers, date) {
  //triggers - object collection, date - js date;
  //returns array of triggers groups (numbers) that fired
  var res, group_id, day, i, xs;
  res = [];
  day = describe_day(date);
  for (group_id in triggers) {
    xs = triggers[group_id];
    if (group_id == 23) clog(group_id);
    xs.forEach(function(trigger){
      if (fired[trigger.type](trigger, date, day)) {res.push(trigger);};
    })
  }
  return res;
}



get.cons_weekdays = function() {
  return WEEKDAYS.map(function(a) {return a.substring(0,3);});
}

get.sheet = function(name){return SpreadsheetApp.getActive().getSheetByName(name)};
//get v0.2