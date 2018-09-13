
var spk = require('spk/src/index.js');
var handle = new spk('spk.dac1');
var index = 0;
setInterval(function() {
  console.log('speaker bleep every 5 senconds')
  handle.once();
}, 5000);
