function daily() {
  try{
    var bundle;
    bundle = {date : new Date(), user_code : USER_CODE, post_fn : post.new_object};
    process.slots(bundle);
  } catch(e){
    clog(e.stack);
  }
}