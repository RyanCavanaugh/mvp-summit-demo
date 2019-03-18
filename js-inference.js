const obj = {};
obj.arr = [];
obj.arr.push(10);





Object.defineProperty(obj, "hello", {
    get() {
        return 10;
    }
});

obj.hello = "100";
