
class MyClass {
    x: number = 10;
}

























function tooManyParams(
    name: string,
    age: number,
    title?: string,
    birthday?: Date,
    home?: string,
    zipcode?: string) {
    console.log(`Hello, ${title} ${name}!`);
}

tooManyParams("alice", 40);

























declare function delay(n: number): Promise<void>;

function thenthenthenthenthen() {
    console.log("Please wait. Loading.");
    return delay(500)
        .then(() => { console.log("1"); return delay(500); })
        .then(() => { console.log("2"); return delay(500); })
        .then(() => { console.log("3"); return delay(500); })
        .catch(() => console.error("Something went wrong!"));
}










////////////////////////////////



/**
 * Does a very important thing
 * 
 * @param wat a parameter you pass in
 */
function mystery(wat) {
    console.log(JSON.stringify(wat));
}

mystery("");
mystery(10);
mystery(true);





function mystery2(x) {

}
mystery2({ name: "hello", length: 5 });
mystery2({ length: 10 });



