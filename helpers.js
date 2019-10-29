function check_local_to_utc(){
  var date, s;
  date = new Date('2019/02/08');
  clog(Date.parse(date.toISOString()).toString());
}


//to create id for trigger group:
//goto sheet 'groups'
//find last record
//add new record with incremented number. Copy that number to buffer
//select type of triggers for this group (pattern A has more frequence usage)
//go to sheet with type of triggers.

//goto new record column A. Paste number from buffer
//enter start date (usually current day)
//enter other data