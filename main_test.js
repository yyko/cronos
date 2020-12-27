function main_test() {
  return jUnit.test_case('General test', {
    'test extract module' : function() {
      jUnit.assert('extract module tests must be passed', extract_module_tests());
    }
  });
}