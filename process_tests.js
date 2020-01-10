function test_process_slots() {
  return jUnit.test_case('', {
    'test processing generator slots': function() {
      var bundle;
      bundle = {date : new Date(), user_code : USER_CODE, post_fn : post_new_object_mock};
      process.slots(bundle);
    }
  });
}