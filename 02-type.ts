/**
 * Created by luowei on 2018/1/1.
 */
// 枚举类型

enum Color {Red, Green, Blue}

let c: Color = Color.Green;

console.log('c: ', c)

enum Color1 {Red, Green, Blue}

let sc: string = Color[1];

console.log('sc: ', sc)

let json: object;

json = {
    a: 2
};

let arr: number[][];

arr = [[1, 2, 3], [2, 2, 3, 4]];

// 断言

let someValue: any = 'this is some value';
let strLength: number = (someValue as string).length;
