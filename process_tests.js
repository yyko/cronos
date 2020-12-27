function test_process_slots() {
  return jUnit.test_case('', {
    'test processing generator slots' : function() {
      var bundle, vh, slots;
      vh = get.slots(tt.ds(1));
      slots = [vh[0]];
      bundle = {date : new Date(),
        user_code : USER_CODE,
        post_fn : post_new_object_mock,
        slots : slots,
        ignore_triggers : true};
      process.slots(bundle);
      return;

      bundle = {date : new Date(), user_code : USER_CODE, post_fn : post_new_object_mock};
      process.slots(bundle);
    }
  });
}