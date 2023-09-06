
     
var date = new Date();
var today = date.toDateString();
document.getElementById('currentdate').innerHTML = today
var hr = date.getHours();
var min = date.getMinutes();
var sec = date.getSeconds();





var hour = 0
var minute = 0
var second = 0
var gethour = document.getElementById('hour')
var getminute = document.getElementById('minute')
var getsecond = document.getElementById('second')
var pm = document.getElementById('pm')
var am = document.getElementById('am')
setInterval(function(){
    sec++;
    getsecond.innerHTML = sec;
    if( sec >= 60 ){
        min++;
        sec = 0
    }
    if ( min >= 60){
        hr++;
        min = 0
    }
    if ( hr >= 12){
        hr = 0
    }
   
    gethour.innerHTML = hr
    getminute.innerHTML = min;































    //     second++
    //     getsecond.innerHTML =  second
    //     millisecond =0
    // if (second >= 60){
    //     minute++
    //     getminute.innerHTML = minute
    //     second =0
    // } else if(minute >= 60){
    //     hour++
    //     gethour.innerHTML = hour
    //     minute = 0
    // } else if(hour >= 12){
    //     hour = 0
    // }
    

},1000 )































// function sine_Cosec() {
//     var opt1 = sC.options[sC.selectedIndex].text
//     if (opt1 === "sine") {
//         screen_1.value = Math.sin(screen_2.value);
//     }
//     else {
//         screen_1.value = Math.asin(screen_2.value);
//     }
// }
// var screen_1 = document.getElementById('screen1');
// var screen_2 = document.getElementById('screen2');
// function factoRial() {
//     var num = 1;
//     for (var i = 1; i <= screen_2.value; i++) {
//         num = num * i;
//         console.log(num);
//     }
//     screen_1.value = screen_2.value = num;
// }