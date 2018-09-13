
var hxd091 = require('hxd091/src/index.js');
var handle = new hxd091('hxd019.scl','hxd019.sda','hxd019.busy');

var getVal = function(){
  var val = handle.learn();
  if(null == val){
    console.log('read wrong!');
    return;
  }
  handle.send(val);
}

var t = setInterval(getVal, 2000);

