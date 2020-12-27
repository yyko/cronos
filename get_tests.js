function test_get_state() {
  return jUnit.test_case('', {
    'test getting state' : function() {
      var state, kv_sheet, slots_sheet;
      kv_sheet = tt.ds(3);
      slots_sheet = tt.ds(2);
      state = get.state(kv_sheet, slots_sheet);
      clog(keys(state));
    }
  });
}

function test_get_slots() {
  return jUnit.test_case('', {
    'test getting slots' : function() {
      var slots;
      slots = get.slots(tt.ds(1));
      jUnit.assert_eq_num(17, slots.length);
    }
  });
}

function test_get_triggers() {
  return jUnit.test_case('', {
    'test getting triggers' : function() {
      var tgs;
      tgs = get.triggers();
      clog(Object.keys(tgs));
    }
  });
}