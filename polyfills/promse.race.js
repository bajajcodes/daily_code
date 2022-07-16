function myRace(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((p) =>
      p.then(
        (v) => resolve(v),
        (r) => reject(new Error(r))
      )
    );
  });
}

const promise1 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 500, "one");
});
const promise2 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 500, "two");
});
const promise3 = new Promise(function (resolve, reject) {
    setTimeout(reject, 00, "three");
  });

myRace([promise1, promise2, promise3]).then(function (value) {
  console.log(value);
  // Both resolve, but promise2 is faster
}).catch(e => console.error(e.message));
