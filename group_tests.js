//decor::Pluggable
function test_group_by_field() {
  return jUnit.test_case('', {
    'test grouping by field': function() {
      var xs, a;
      xs = get.triggers();
      a = group.by.field(xs, GROUP_ID);
      clog(Object.keys(a));
    }
  });
}