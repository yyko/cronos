function test_get_fired_groups_map() {
  return jUnit.test_case('', {
    'test getting fired groups map' : function() {
      var sheet, slots, active, date, triggers_map, fired_groups, triggers_sheet, triggers;
      triggers_sheet = tt.ds('0.5');
      triggers = get.triggers_from_sheet(triggers_sheet, 'b');
      date = new Date(beginningOfDay(new Date()));
      triggers_map = group.by.field(triggers, GROUP_ID);
      jUnit.assert_true(keys(triggers_map).indexOf('35') > -1);
      fired_groups = get.fired_groups_map(triggers_map, date);
      jUnit.assert_true(fired_groups['35']);
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