# JavaScript Inference

 * Let's start by making an object and taking on an array
 * This specially legal in JS because reasons
 * Make an array, push a number into it, good to go
 * What if we want to specify?
 * Add a JS Doc comment
 * Intellisense is right but behavior is wrong
   * All JS Doc is wrong actually
 * Turn on ts-check

 * Now let's defineProperty to make a get/set
 * Then assign to it
 * It's readonly! Duh
 * Add a setter
 * Also the type is wrong!
 * What if we meant that?
 * Add JS Doc to the DP call!
 * Wow

```js
const obj = {};
obj.arr = [];
obj.arr.push(10);

Object.defineProperty(obj, "hello", {
    get() {
        return 10;
    }
});

obj.hello = 100;
```


----------------------

# Map / Const

 * Coworker challenges us to type this function
 * We can do that
 * Write ReturnTypeIsh inference thing
 * Wrap in a function to show it works
 * Now let's apply it to an array
 * Mapped type!
 * Write the function
 * It works
 * Heterogenuous array - is that what we want? Maybe!
 * But if not, let's tuplify this array literal
 * We could also tupleify any of the literals inside
 * Great

```ts
type ReturnTypeIsh<T> = T extends () => infer R ? R : T;
type InvokeAll<T> = { [K in keyof T]: ReturnTypeIsh<T[K]> };

declare function invokeAll<T extends ReadonlyArray<unknown>>(arr: T): InvokeAll<T>;

const local = [() => 10, () => "", "foo"] as const;
const k = invokeAll(local);
```

----------------

# Tuples and Const contexts

 * Coworker challenges us to type this function
 * It takes an object, a property name, and the arguments to that function
 * Does some other stuff, presumably
 * Here I wrote an object and some test cases
 * Success cases, error cases
 * Don't be scared, we're doing this
 * I don't even need any helper types here
 * **`<T extends Record<K, (...args: any[]) => any, K extends keyof T>()`**
 * **`(obj: T, key: K, ...args: Parameters<T[K]>): ReturnType<T[K]>`**
 * Our first type parameter will be for the object itself
 * Record means "It has properties of these names of these types"
 * We do need it to be a function
 * Our second type parameter will be the key type
 * It's a key of the original object
 * Our first two formal arguments are easy
 * Now comes the neat part, the argument tuple
 * Return type is just return type
 * How'd we do on the testcases?
 * How are the types?
 * How's the intellisense?


--------------------------

# Refactoring

 * Surround with accessor - `class MyClass`
   * Select the whole property
   * Generate get and set
   * All you C# guys are so happy right now
 * Convert to named arguments - `tooManyParams`
   * I want to pass zipcode here
   * Passing undefined 3 times is terrible
   * Let's refactor this to named parameters
   * Invoke at function declaration name
 * Convert to async - `thenthenthenthenthen`
   * Who loves JS Promises?
   * Invoke at function declaration name
 * Mystery function - infer from usage
   * Who's seen JS doc like this before?
   * How does this function get called?
   * Let's find out!


