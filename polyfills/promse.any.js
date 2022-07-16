function myAny(promises) {
  var errors = [];
  return new Promise((resolve, reject) => {
    promises.forEach((p) => {
      if (p instanceof Promise) {
        p.then(
          (v) => resolve(v),
          (r) => {
            errors.push(r);
          }
        ).finally(() => {
          if (errors.length === promises.length) {
            reject(
              new AggregateError(
                errors,
                "AggregateError: No Promise in Promise.myAny was resolved"
              )
            );
          }
        });
      } else {
        resolve(p);
      }
    });
  });
}

const pErr = new Promise((resolve, reject) => {
  reject("Always fails");
});

const pResolve = Promise.resolve(42);

const pValue = 24;

const pSlow = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "Done eventually");
});

const pFast = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "Done quick");
});

myAny([pErr, pErr, pErr])
  .then((value) => console.log("value:", value))
  .catch((e) => console.error("reason:", e.message, "\n", "errors:", e.errors));
