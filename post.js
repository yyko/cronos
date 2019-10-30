// post 0.4

post = {};

//::AccountingObject->IO Either String Int
post.new_object = function(x){
  var response ,txt, url, payload, options;
  url = "http://first.sedecilliard.com/ajax/ajax_port";
  payload = {
    "object" : JSON.stringify(x),
    "query_type": 'new_object'

  };
  options =
   {
     "method" : "post",
     "muteHttpExceptions":true,
     "payload" : payload
   };
  try {
    response = UrlFetchApp.fetch(url, options);
    if (response.getResponseCode() == 200) {
      return [null, response.getContentText()];
    } else {
      return [{type:'error', data:JSON.stringify(response)}, null];
    }
  } catch(e){

    return [{type:'error2', data:JSON.stringify(e)}, null];
  }
}

// post 0.4