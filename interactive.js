// interactive 0.6.0

function onOpen(){
  var submenu = [
    {name:'Add A slot', functionName:'add_slot_of_type_a'},
    {name:"Open sidebar", functionName:"open_sidebar"},
    {name:"Generate manually", functionName:"manual_generation"},
    {name:'Test run', functionName:'test_generation'},
    {name:'Install trigger', functionName:'install_trigger'}
    ];
  SpreadsheetApp.getActiveSpreadsheet().addMenu('Sheet Actions', submenu);
}

function add_slot_of_type_a(){
    add.slot('A');
}

function install_trigger() {
 var ss;
 ss = SpreadsheetApp.getActive();
 remove_triggers();
 ScriptApp.newTrigger('daily').timeBased().everyDays(1).atHour(3).create();
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
  process.slots(new Date(), USER_CODE, post_new_object_mock);
}

function manual_generation(){
  process.slots(new Date(), USER_CODE, post.new_object);
}

function open_dialog(){
  var html, sheet;
  html = HtmlService.createTemplateFromFile('dialog').evaluate()
      .setWidth(600)
      .setHeight(400);
  SpreadsheetApp.getUi().showModalDialog(html, 'Dialog sample');
}

// interactive 0.6.0