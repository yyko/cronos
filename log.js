//log module 1.0 by yyk@mail.ru

var LOG_LEVELS = [1, 2];
var LOG_LENGTH = 1000;
var LOGGING = true
log_module = {};

log_module.log = function(string, level) {
    var sheet, matrix, last, level_in;
  if (!LOGGING) return;
  if (level !== undefined) {
    level_in = LOG_LEVELS.indexOf(level)>-1;
  }
  else {level_in = false;}
  if (!level_in) return;
  sheet = SpreadsheetApp.getActive().getSheetByName('log');
  matrix =[ [ new Date(), Session.getEffectiveUser(), string]];
  ssa.insert_matrix(matrix, sheet, 1);
  last = sheet.getLastRow();
  if (last>= LOG_LENGTH) {sheet.deleteRow(last);}
  sheet.getRange(1, 1).activate().getValue();
}