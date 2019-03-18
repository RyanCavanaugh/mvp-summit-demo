// @ts-check

const obj = {};
/**
 * @type string[]
 */
obj.arr = [];
obj.arr.push(10);


/**
 * @type number | string
 */
Object.defineProperty(obj, "hello", {
    get() {
        return 10;
    },
    set() {
        // ok
    }
});

obj.hello = "100";
