function test_post_new_object() {
  return jUnit.test_case('', {
    'test posting new object': function() {
      var obj, res;
      obj = {};
      obj.class_root = 'target';
      obj.target_brief = 'test2'
      obj.target_description = 'test of posting objects';
      obj.target_parent_code = 2072;
      obj.target_feedback_date = 0;
      obj.user_code = USER_CODE;
      res = post.new_object(obj);
      clog(res);
    }
  });
}