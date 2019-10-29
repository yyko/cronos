//ss_accessor module 1.2 by yyk@mail.ru
(function () {
  var get_headers, append_m, put_m, clear_matrix, insert_matrix,
  tile_sheet, get_sheet, read_table, get_matrix, get_row;

  get_row = function(sheet, n) {
    return sheet.getRange(n, 1, 1, sheet.getLastColumn()).getValues()[0];
  }

  get_matrix = function (sheet, start_row, start_column) {
    var range, values, h, w;
    if (start_row == undefined) {start_row = 1;}
    if (start_column == undefined) {start_column = 1;}
    h = sheet.getLastRow() - start_row + 1;
    w = sheet.getLastColumn() - start_column + 1;
    if (h == 0 || w == 0) {return [[]];}
    range = sheet.getRange(start_row, start_column, h, w);
    values = range.getValues();
    return values;
  }

  get_sheet = function(ss, sheet_name) {
    var sheet;
    sheet = ss.getSheetByName(sheet_name);
    if (sheet == null){
      sheet = ss.insertSheet(sheet_name, 0);
    }
    return sheet;
  }

  tile_sheet = function(sheet, width, height, value) {
    sheet.getRange(1,1, height, width).setValue(value);
  }

  insert_matrix = function (matrix, sheet, start_row, start_column) {
    var range;
    if (matrix.length) {
      sheet.insertRows(start_row, matrix.length);
      if (start_column == undefined) {start_column = 1;}
      range = sheet.getRange(start_row, start_column, matrix.length, matrix[0].length);
      range.setValues(matrix);
    }
  }

  clear_matrix = function(sheet, start_row, start_column) {
    var range, last_row, last_column, h, w;
    last_row = sheet.getLastRow();
    last_column = sheet.getLastColumn();
    if (start_row == undefined) {start_row = 1;}
    if (start_column == undefined) {start_column = 1;}
    if (last_row >= start_row && last_column > 0) {
      h = last_row - start_row + 1;
      w = last_column - start_column + 1;
      range = sheet.getRange(start_row, start_column, h, w);
      range.clear();
    }
  }

  put_m = function (matrix, sheet, start_row, start_column) {
    var range;
    if (matrix.length) {
      if (start_row == undefined) {start_row = 1;}
      if (start_column == undefined) {start_column = 1;}
      range = sheet.getRange(start_row, start_column, matrix.length, matrix[0].length);
      range.setValues(matrix);
    }
  }

  append_m = function (matrix, sheet, start_column) {
    var last_row;
    if (matrix.length == 0) return;
    last_row = sheet.getLastRow();
    put_m(matrix, sheet, last_row + 1, start_column);
  }


  get_headers = function(sheet) {
    //returns first matrix vector
    var range, values;
    range = sheet.getDataRange();
    range = sheet.getRange(1, 1, 1, range.getLastColumn());
    values = range.getValues();
    return values[0];
  }

  ss_accessor = {};
  ssa = ss_accessor;
  ss_accessor.get_headers = get_headers;
  ss_accessor.get_row = get_row;
  ss_accessor.put_matrix = put_m;
  ss_accessor.get_matrix = get_matrix;
  ss_accessor.clear_matrix = clear_matrix;
  ss_accessor.append_matrix = append_m;
  ss_accessor.insert_matrix = insert_matrix;
  ss_accessor.tile_sheet = tile_sheet;
  ss_accessor.get_sheet = get_sheet;
})();