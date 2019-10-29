function test_process_slots() {
  return jUnit.test_case('', {
    'test processing generator slots': function() {
      var date;
      date = new Date();
      process.slots(true, date, 116);
    }
  });
}