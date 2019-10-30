// ssb 2.1.0
//dependeces: [mp]
var ssb = {};

ssb.put_on_top = function(sheet, vh){
  var headers, m;
  headers = ssb.get_headers(sheet);
  m = mp.vh_to_m(vh, headers);
  sheet.insertRowsBefore(3, vh.length)
  sheet.getRange(3, 1, m.length, m[0].length).setValues(m);
}

ssb.on_top = function(sheet, h){
  var headers, m;
  headers = ssb.get_headers(sheet);
  m = mp.vh_to_m([h], headers);
  sheet.insertRowBefore(3);
  sheet.getRange(3, 1, m.length, m[0].length).setValues(m);
}

ssb.append = function(sheet, h){
  var headers, v;
  headers = ssb.get_headers(sheet);
  v = mp.vh_to_m([h], headers)[0];
  sheet.appendRow(v);
}

//::GSheet->Int->Hashtag
ssb.put_row = function(sheet, row ,h){
  var headers, m;
  headers = ssb.get_headers(sheet);
  m = mp.vh_to_m([h], headers);
  sheet.getRange(row, 1, 1, headers.length).setValues(m);
}

//::GSheet->Int->Hashtag
ssb.get_row = function(sheet, row){
  var headers, m, vh;
  headers = ssb.get_headers(sheet);
  m = sheet.getRange(row, 1, 1, headers.length).getValues();
  vh = mp.m_to_vh(m, headers);
  return vh[0];
}

ssb.get_headers = function(sheet){
  return sheet.getRange(2, 1, 1, sheet.getLastColumn()).getValues()[0];
}

ssb.clear_vals = function(sheet){
 var last_row;
 last_row = sheet.getLastRow();
 if (last_row > 3) {
  sheet.getRange(3, 1, last_row - 2, sheet.getLastColumn()).clear();
 }
}

//::GSheet->String->Hh
ssb.get_map = function(sheet, key_field){
  return vh_to_hh(ssa.get_vh(sheet), key_field);
}

//::GSheet->Vh->IO()
ssb.put_vh = function(sheet, vh){
  var m, headers;
  headers = sheet.getRange(2,1,1,sheet.getLastColumn()).getValues()[0];
  m =  mp.vh_to_m(vh, headers);
  sheet.getRange(3, 1, m.length, m[0].length).setValues(m);
}

//::GSheet->Vh
ssb.get_vh = function(sheet){
  var m, headers;
  m = sheet.getDataRange().getValues().slice(1);
  headers = m.shift();
  if (m.length) {
    return mp.m_to_vh(m, headers);
  }
  return [];
}

// ssb 2.1.0