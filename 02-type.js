/**
 * Created by luowei on 2018/1/1.
 */
// 枚举类型
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log('c: ', c);
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 0] = "Red";
    Color1[Color1["Green"] = 1] = "Green";
    Color1[Color1["Blue"] = 2] = "Blue";
})(Color1 || (Color1 = {}));
var sc = Color[1];
console.log('sc: ', sc);
var json;
json = {
    a: 2
};
var arr;
arr = [[1, 2, 3], [2, 2, 3, 4]];
// 断言
var someValue = 'this is some value';
var strLength = someValue.length;
