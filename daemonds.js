//daemonds 0.4.1

function daily() {
  try{
    process.slots(false, new Date(beginningOfDay(new Date())), USER_CODE);
  } catch(e){
    clog(e.stack);
  }
}
//daemonds 0.4.1