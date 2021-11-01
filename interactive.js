// interactive 0.6.0

function onOpen() {
  var submenu = [
    {name : "Open sidebar", functionName : "open_sidebar"},
    {name : "Generate slot", functionName : "generate_slot"},
    {name : "Generate manually", functionName : "manual_generation"},
    {name : 'Test run', functionName : 'test_generation'},
    {name : 'Install trigger', functionName : 'install_trigger'}
  ];
  SpreadsheetApp.getActiveSpreadsheet().addMenu('Sheet Actions', submenu);
}

function generate_slot() {
  var bundle, slots, range, sheet, row, h;
  range = SpreadsheetApp.getActive().getActiveSheet().getActiveRange();
  sheet = range.getSheet();
  if (sheet.getName() == 'trigger slots') {
    row = range.getRow();
    if (row > 2) {
      h = ssb.get_row(sheet, row);
      bundle = {date : new Date(),
        user_code : USER_CODE,
        post_fn : post.new_object,
        slots : [h],
        ignore_triggers : true};
      process.slots(bundle);
    }
  }
}

function install_trigger() {
  var ss;
  ss = SpreadsheetApp.getActive();
  remove_triggers();
  ScriptApp.newTrigger('daily').timeBased().everyDays(1).atHour(0).create();
  Browser.msgBox('All triggers have been installed under ' + Session.getActiveUser() + ' account');
}

function remove_triggers() {
  var triggers;
  triggers =  ScriptApp.getProjectTriggers();
  triggers.forEach(function(element) {
    ScriptApp.deleteTrigger(element);
  });
}

function open_sidebar() {
  var html, sheet;
  html = HtmlService.createTemplateFromFile('sidebar').evaluate().setTitle('Sidebar');
  SpreadsheetApp.getUi().showSidebar(html);
}

function test_generation() {
  var bundle;
  bundle = {date : new Date(), user_code : USER_CODE, post_fn : post_new_object_mock};
  process.slots(bundle);
}

function manual_generation() {
  var bundle;
  bundle = {date : new Date(), user_code : USER_CODE, post_fn : post.new_object};
  process.slots(bundle);
}

function open_dialog() {
  var html, sheet;
  html = HtmlService.createTemplateFromFile('dialog').evaluate()
    .setWidth(600)
    .setHeight(400);
  SpreadsheetApp.getUi().showModalDialog(html, 'Dialog sample');
}

// interactive 0.6.0