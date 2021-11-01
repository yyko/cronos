function include_all(n) {
  var core, dialog;
  n = n || 0;
  core = ['process_','reducers_', 'utils_','globals_','Button', 'Select', 'App', 'AppConnected', 'main_'];
  dialog = ['process_', 'utils_', 'dialog_main_'];
  var modules = [core, dialog];
  return modules[n].map(function(module) {return include(module);}).reduce(concat);
}

//server module v0.1. by yyk@mail.ru
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
    .getContent();
}

function doGet(request) {
  return HtmlService.createTemplateFromFile('index')
    .evaluate().setTitle('sales dashboard');
}

function server_request(x) {
  if (process[x.type] !== undefined) {return process[x.type](x.data);}
  else {return {type : 'error', data : 'unknown request'};};
}