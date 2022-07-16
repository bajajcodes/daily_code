const p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1050, "1");
});
const p2 = Promise.resolve("2");
// const p3 = Promise.reject("3");
const promise1 = Promise.resolve(33);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 0, "foo");
});
const promise4 = 42;

function myAll(promises) {
  var values = [];
  var promisesFulfilled = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((p, index) => {
      if (p instanceof Promise) {
        p.then(
          (v) => {
            values[index] = v;
            ++promisesFulfilled;
            if (promisesFulfilled === promises.length) {
              resolve(values);
            }
          },
          (r) => reject(new Error(r))
        );
      }else{
        values[index] = p;
        ++promisesFulfilled;
      }
    });
  });
}

myAll([p1,p2, promise3, promise2, promise1, promise4])
  .then((v) => console.log({ v: v.join(" ") }))
  .catch((r) => console.error(r.message, "rejected"));
