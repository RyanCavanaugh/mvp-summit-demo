const MyObj = {
    compare(a: string, b: string) { return  a > b ? 1 : a < b ? -1 : 0; },
    log10(n: number) { return Math.log10(n); },
    stringify(n: number) { return n.toString(); },
    count: 10
};

declare const callMethodOf: any;

//  OK
callMethodOf(MyObj, "compare", "x", "y");
callMethodOf(MyObj, "log10", 10);
// Should error - method doesn't exist

// Should error - not a function
callMethodOf(MyObj, "count");
// Should error - wrong argument types
callMethodOf(MyObj, "log10", "hello");
// Should error - wrong argument count
callMethodOf(MyObj, "compare", "hello");







namespace backup {
    const MyObj = {
        alpha(a: string, b: number) { return 0; },
        beta(n: number) { return "" },
        gamma(n: number) { return 10 },
        count: 10
    }

    // declare function callMethodOf<T extends Record<K, (...args: any[]) => any>, K extends keyof T>(obj: T, key: K, ...args: Parameters<T[K]>): ReturnType<T[K]>;
    

    function callMethodOf<T extends Record<K, (...args: any[]) => any>, K extends keyof any>(obj: T, key: K, ...args: Parameters<T[K]>): ReturnType<T[K]> {
        return obj[key](...args);
    }

    const a = callMethodOf(MyObj, "alpha", "h", 10);
    const b = callMethodOf(MyObj, "beta", 10);
    const c = callMethodOf(MyObj, "count", "h", 10);


    const ab = Math.random() > 0.5 ? "gamma" as "gamma" : "beta" as "beta";
    const qq = callMethodOf(MyObj, ab, 10);

    callMethodOf(MyObj, "beta", 100);
}