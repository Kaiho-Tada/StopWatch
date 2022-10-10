 let timerID = null;
 let timer = 0;
 let sw_status = "off"
 function start_count(){
     if(sw_status == "off"){
     sw_status = "on"
     timerID = setInterval("count()", 1000);
     }
 }
 function count(){
     timer++;
     document.form_sw.counter.value = timer;
 }
 function stop_count(){
     clearInterval(timerID);
     sw_status = "off"
 }
 function reset_count(){
     stop_count();
     timer = 0;
     document.form_sw.counter.value = 0;
 }