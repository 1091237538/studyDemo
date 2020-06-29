

// 这是一串垃圾代码

var count = 1;
function Test(){
    var demo = document.getElementById('num');
    function one() {
        if (count == 1) {
            demo.style.display = 'block';
            count = 0;
        } else {
            demo.style.display = 'none';
            count = 1;
        }
    }
    return one;
}

// var inherit = (function (){
//         var F = function (){}
//         return function (a,b){
//             F.prototype=b.prototype;
//             a.prototype = new F();
//             a.prototype.constructor = Test2;
//         }
//
// }());
// inherit(Test2,Test);
// var test = new Test();
// var test2 = new Test2();
// function Test2 () {
//     var demo = document.getElementById('num2');
// }



// function test3 () {
//     var demo3 = document.getElementById('num3');
//     if(count==1) {
//         demo3.style.display='block';
//         count = 0;
//     }else {
//         demo3.style.display = 'none';
//         count=1;
//     }
// }
// function test4 () {
//     var demo4 = document.getElementById('num4');
//     if(count==1) {
//         demo4.style.display='block';
//         count = 0;
//     }else {
//         demo4.style.display = 'none';
//         count=1;
//     }
// }
