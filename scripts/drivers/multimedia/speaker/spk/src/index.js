/*
 * Copyright (C) 2015-2018 Alibaba Group Holding Limited
 */
var spk  = function(spk_id) {
  this.handle = DAC.open(spk_id);
  this.onVal = 128;
  this.offVal = 0;
  this.once = function(){
    var i = 0;
    for(i=255;i>0;i--){
        DAC.setVol(this.handle,i);
        DAC.setVol(this.handle,255-i);
        DAC.setVol(this.handle,i);
    }
  };

};


module.exports = spk;
