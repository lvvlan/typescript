/**
 * Created by luowei on 2018/1/1.
 */
interface SearchFunc {
    (source: string, subString: string): boolean;
    test?: string;
}

let mySearch: SearchFunc;

// mySearch = function(source, subString) {
//     const result = source.search(subString);
//     return result > -1;
// }

mySearch = function(src, sub) {
    const result = src.search(sub);
    return result > -1;
}

console.log(`mySearch => ${mySearch('myTest', 'es')}`)

interface ClockInterface {
    currentTime: Date;
    setTime(d: Date);
}

class Clock implements ClockInterface {
    public currentTime: Date;
    constructor(h: number, m: number) {
        console.log(h, m);
    }
    public setTime(d: Date) {
        this.currentTime = d;
    }
    public getTime() {
        console.log(this.currentTime);
    }
}

let myClock = new Clock(1, 2)
myClock.setTime(new Date())
myClock.getTime()

type sn = number | string;

let snTest: sn;

snTest = 'abc';

console.log(snTest);
