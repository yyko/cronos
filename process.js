// process 0.4.3

process = {};

//::Bool->Date->Int->IO()
process.slots = function(test_mode_on, date, user_code){
  var date, fired_groups, idgts, active, xs;
  date = date || new Date(beginningOfDay(new Date()));
  active = extract.active(ssb.get_vh(get.sheet(SLOTS_SH)));
  fired_groups = get.fired_groups(group.by.field(get.triggers(), GROUP_ID), date);
  if (test_mode_on) {
    xs = fired_groups.slice(0, 1);
  } else {xs = fired_groups;}
  xs.forEach(function(group){
    var slots;
    slots = active.filter(function(x){return x[GROUP_ID] == group[GROUP_ID]});
    slots.forEach(function(slot){
      var res, goal, bod;
      bod = dnt.bod(date);
      slot.feedback_date = dnt.local_to_utc_unixms(new Date(bod))/1000;
      goal = gen.goal(slot, user_code);
      if (test_mode_on) {
        log('test run: slot ' + slot[SLOT_ID] +  ': ' + slot.brief, 1);
        log('feedback timestamp: ' + goal.target_feedback_date.toString(), 1);
      } else {
        res = post.new_object(goal);
        log('slot ' + slot[SLOT_ID] +  ': ' + slot.brief, 1);
        if (res[0]) {
          log(res[0].type + ' ' + res[0].data , 1);
        } else {
          log(res[1] + ' code assigned', 1);
          log('feedback timestamp: ' + goal.target_feedback_date.toString(), 1);
        }
      }
    });
  });
}

// process 0.4.3