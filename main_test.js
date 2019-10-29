function main_test() {
  return jUnit.test_case('General test', {
    'test gen module': function() {
      jUnit.assert('gen module tests must be passed', gen_module_tests());
    },
    'test calc module': function() {
      jUnit.assert('calc module tests must be passed', calc_module_tests());
    }
  });
}