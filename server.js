// server v0.1
//dependecy process

function include_all() {
  var modules = [ 'utils_','convert_', 'wrap_', 'gen_', 'is_', 'build_', 'validate_', 'process_', 'gen_', 'main_'];
  return modules.map(function(module){return include(module);}).reduce(concat);
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

function server_request(x){
  if (process[x.type] !== undefined) {return process[x.type](x.data)}
  else {return {type:'error', data:'unknown request'}};
}