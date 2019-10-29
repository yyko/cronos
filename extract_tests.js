function test_extract_active() {
  return jUnit.test_case('', {
    'test extracting active': function() {
      var xs
      xs = extract.active(get.slots(tt.ds(1)));
      jUnit.assert_eq_num(6, xs.length);
    }
  });
}