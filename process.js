process = {};

//::Date->Int->Fn->IO()
process.slots = function(date, user_code, post_fn){
  var date, fired_groups, idgts, active, xs, triggers_map;
  date = date || new Date(beginningOfDay(new Date()));
  active = extract.active(ssb.get_vh(get.sheet(SLOTS_SH)));
  triggers_map = group.by.field(get.triggers(), GROUP_ID)
  fired_groups = get.fired_groups_map(triggers_map, date);
  active.forEach(function(slot){
    var bod, goal, res;
    if (def(fired_groups[slot[GROUP_ID]])) {
      bod = dnt.bod(date);
      slot.feedback_date = dnt.local_to_utc_unixms(new Date(bod))/1000;
      goal = gen.goal(slot, user_code);
      res = post_fn(goal);
      log('slot ' + slot[SLOT_ID] +  ': ' + slot.brief, 1);
      if (res[0]) {
        log(res[0].type + ' ' + res[0].data , 1);
      } else {
        log(res[1] + ' code assigned', 1);
        log('feedback timestamp: ' + goal.target_feedback_date.toString(), 1);
      }
    }
  });
}