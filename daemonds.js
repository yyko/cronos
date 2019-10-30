function daily() {
  try{
    process.slots(new Date(beginningOfDay(new Date())), USER_CODE, post.new_object);
  } catch(e){
    clog(e.stack);
  }
}