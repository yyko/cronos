//a -> IO ()
function log(x, level) {log_module.log(x, level);};

//::Date -> Unix_ms
function beginningOfDay(x) {return dnt.bod(x);}