var mySearch;
// mySearch = function(source, subString) {
//     const result = source.search(subString);
//     return result > -1;
// }
mySearch = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
console.log("mySearch => " + mySearch('myTest', 'es'));
var Clock = (function () {
    function Clock(h, m) {
        console.log(h, m);
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    Clock.prototype.getTime = function () {
        console.log(this.currentTime);
    };
    return Clock;
}());
var myClock = new Clock(1, 2);
myClock.setTime(new Date());
myClock.getTime();
var snTest;
snTest = 'abc';
console.log(snTest);
