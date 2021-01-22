function extract_module_tests() {
  return test_extract_active();
}

function test_extract_active() {
  return jUnit.test_case('', {
    'test extracting active' : function() {
      var xs, sheet, slots, slot_ids;
      sheet = tt.ds('0.4');
      slots = get.slots(sheet);
      xs = extract.active(slots);
      jUnit.assert_eq_num(123, slots.length);
      jUnit.assert_eq_num(24, xs.length);

      slot_ids = xs.map(function(x) {return x.slot_id;});
      jUnit.assert_true(slot_ids.indexOf(30) > -1);
      jUnit.assert_true(slot_ids.indexOf(29) > -1);

      xs = extract.active(get.slots(tt.ds(1)));
      jUnit.assert_eq_num(6, xs.length);
    }
  });
}