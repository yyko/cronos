// gen 0.4.2

gen = {};

//::Slot->Goal
gen.goal = function(h, user_code){
 var obj, t1, t2, interval;
  obj = {};
  obj.class_root = 'target';
  obj.target_brief = h.brief
  obj.target_description = h.description;
  obj.target_parent_code = h.parent_code;
  obj.target_feedback_date = h.feedback_date;
  obj.user_code = user_code;
  if (h.interval == '' || h.interval == undefined) {
    //no interval
  }
  else {
    interval = parse.interval(h.interval);
   // t1 = TODO: write proper method for DATATIME in mySQL
    //t2 = TODO: write proper method for DATATIME in mySQL
  }
  if (h.lifetime == '') {
    obj.target_eternity  = 1;
  }
  else {
    obj.target_eternity = 0;
    obj.target_lifetime = h.lifetime;
  }
  return obj;
}

gen.options = function(xs, selected_index){
  return xs.map(function(x, i){
  if (selected_index == i) {
        return '<option value="' + x.value + '" selected>' + x.label + '</option>';
  } else {
      return wrap.in_tag('option', {value:x.value}, x.label);
  }
  });
}

// gen 0.4.2