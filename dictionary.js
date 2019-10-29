//dictionary 0.4.0

_ = Underscore.load();

USER_CODE = 116;
STATE_SHEET_NAME = 'state';
BR = '<br>';

add_fields = function(obj, v) {
  v.forEach(function(field) {obj[field.toUpperCase()] = field});
  return obj;
}

WORDS = ['slot', 'trigger', 'type', 'slot_id', 'brief', 'group_id', 'description', 'parent_code',
          'lifetime', 'active', 'repeat', 'timestamp', 'in_day_interval', 'fired', 'in_day_interval', 'g', 'a', 'b', 'c', 'd'
        ];

add_fields(this, WORDS);

TRIGGER_SLOT_FIELDS = [SLOT_ID, GROUP_ID, BRIEF, DESCRIPTION, PARENT_CODE, LIFETIME, ACTIVE, REPEAT, TIMESTAMP, IN_DAY_INTERVAL]

CRON_SS_ID = '1Vbi6_QfKnQrBHjAdREWA0cqkbPAX6dsYB7mjJhVjvQ8';
SLOTS_SH = 'trigger slots';

var A_TRIGGERS_SH = 'A';
var B_TRIGGERS_SH = 'B';
var C_TRIGGERS_SH = 'C';
var D_TRIGGERS_SH = 'D';
var G_TRIGGERS_SH = 'G';
var WEEKDAYS =  ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var DAY_IN_MILIS = 24*60*60*1000;

//dictionary 0.4.0