
type Return<T> = T extends () => infer R ? R : T;
type InvokeAll<T> = { [K in keyof T]: Return<T[K]>; };

declare function invokeAll<T extends ReadonlyArray<unknown>>(arr: T): InvokeAll<T>;

const arr = [
    () => 10,
    "hello world",
    () => "hello MVPs!"
];

const result = invokeAll(arr);























namespace Backup {
    type ReturnTypeIsh<T> = T extends () => infer R ? R : T;
    type InvokeAll<T> = { [K in keyof T]: ReturnTypeIsh<T[K]> };
    
    declare function invokeAll<T extends ReadonlyArray<unknown>>(arr: T): InvokeAll<T>;
    
    const local = [() => 10, () => "", "foo"] as const;
    const k = invokeAll(local);
    
}

