function get_type_a_triggers(triggers) {
  var matrix, ss, i, start_date, interval, id, measure;
  ss = SpreadsheetApp.openById(CRON_SS_ID);
  matrix = utils.get_matrix_s(utils.get_sheet(ss, A_TRIGGERS_SH));
  for (i = 0;i < matrix.length;i++) {
    id = matrix[i][0];
    if (triggers[id] == undefined) {
      triggers[id] = {};
      triggers[id].type = 'a';
      triggers[id].atoms = [];
    }
    start_date = matrix[i][1];
    interval = matrix[i][2];
    measure = matrix[i][3] == '' ? 'day' : matrix[i][3];

    triggers[id].atoms.push({start_date : start_date, interval : interval});
  }
  return triggers;
}

function get_type_g_triggers(triggers, matrix) {
  var matrix, ss, i, start_date, interval, id;
  if (!matrix) {
    ss = SpreadsheetApp.openById(CRON_SS_ID);
    matrix = utils.get_matrix_s(utils.get_sheet(ss, G_TRIGGERS_SH));
  }
  for (i = 0;i < matrix.length;i++) {
    id = matrix[i][0];
    if (triggers[id] == undefined) {
      triggers[id] = {};
      triggers[id].type = 'g';
      triggers[id].atoms = [];
    }
    start_date = matrix[i][1];
    interval = matrix[i][2] == '' ? 1 : matrix[i][2];
    triggers[id].atoms.push({start_date : start_date, interval : interval});
  }
  return triggers;
}

function get_type_b_triggers(triggers) {
  var matrix, ss, i, week_day, cons_weekdays, id;
  var start_date, interval;
  ss = SpreadsheetApp.openById(CRON_SS_ID);
  matrix = utils.get_matrix_s(utils.get_sheet(ss, B_TRIGGERS_SH));
  cons_weekdays = get_cons_weekdays();
  for (i = 0;i < matrix.length;i++) {
    id = matrix[i][0];
    if (triggers[id] == undefined) {
      triggers[id] = {};
      triggers[id].type = 'b';
      triggers[id].atoms = [];
    }
    week_day = matrix[i][2];
    start_date = matrix[i][1];
    interval = matrix[i][3];
    triggers[id].atoms.push({week_day : cons_weekdays.indexOf(week_day), start_date : start_date, interval : interval});
  }
  return triggers;
}

function get_type_c_triggers(triggers) {
  var matrix, ss, i, week_day, cons_weekdays, id, start_date;
  ss = SpreadsheetApp.openById(CRON_SS_ID);
  matrix = utils.get_matrix_s(utils.get_sheet(ss, C_TRIGGERS_SH));
  for (i = 0;i < matrix.length;i++) {
    id = matrix[i][0];
    if (triggers[id] == undefined) {
      triggers[id] = {};
      triggers[id].type = 'c';
      triggers[id].atoms = [];
    }
    start_date = matrix[i][1];
    triggers[id].atoms.push({day_of_month : matrix[i][2], start_date : start_date});
  }
  return triggers;
}

function get_type_d_triggers(triggers) {
  var matrix, ss, i, week_day, cons_weekdays, id, start_date;
  ss = SpreadsheetApp.openById(CRON_SS_ID);
  matrix = utils.get_matrix_s(utils.get_sheet(ss, D_TRIGGERS_SH));
  cons_weekdays = get_cons_weekdays();
  for (i = 0;i < matrix.length;i++) {
    id = matrix[i][0];
    if (triggers[id] == undefined) {
      triggers[id] = {};
      triggers[id].type = 'd';
      triggers[id].atoms = [];
    }
    week_day = matrix[i][3];
    start_date = matrix[i][1];
    triggers[id].atoms.push({n : matrix[i][2], week_day : cons_weekdays.indexOf(week_day)});
  }
  return triggers;
}