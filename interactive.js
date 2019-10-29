// interactive 0.4.1

function onOpen(){
  var submenu = [
    {name:"Open R-sidebar", functionName:"open_r_sidebar"},
    {name:"Open sidebar", functionName:"open_sidebar"},
    {name:"Generate manually", functionName:"manual_generation"},
    {name:'Test run', functionName:'test_generation'},
    {name:'Install trigger', functionName:'install_trigger'}
    ];
  SpreadsheetApp.getActiveSpreadsheet().addMenu('Sheet Actions', submenu);
}

function open_r_sidebar(){
  var html, sheet;
  html = HtmlService.createTemplateFromFile('r_sidebar').evaluate().setTitle('R sidebar');
  SpreadsheetApp.getUi().showSidebar(html);
}

function install_trigger() {
 var ss;
 ss = SpreadsheetApp.getActive();
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

function open_sidebar(){
  var html, sheet;
  html = HtmlService.createTemplateFromFile('sidebar').evaluate().setTitle('Sidebar');
  SpreadsheetApp.getUi().showSidebar(html);
  }

function test_generation(){
  process.slots(true, new Date(), USER_CODE);
}

function manual_generation(){
  process.slots(false, new Date(), USER_CODE);
}

function open_dialog(){
  var html, sheet;
  html = HtmlService.createTemplateFromFile('dialog').evaluate()
      .setWidth(600)
      .setHeight(400);
  SpreadsheetApp.getUi().showModalDialog(html, 'Dialog sample');
}

// interactive 0.4.1