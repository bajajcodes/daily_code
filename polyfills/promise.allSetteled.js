function myAllSettled(promises) {
  var results = [];
  var promisesSettled = 0;
  return new Promise((resolve, _) => {
    promises.forEach((p, index) => {
      if (p instanceof Promise) {
        p.then(
          (v) =>
            (results[index] = {
              status: "fulfilled",
              value: v,
            }),
          (r) =>
            (results[index] = {
              status: "rejected",
              error: r?.message ?? r,
            })
        ).finally(() => {
          ++promisesSettled;
          if (promisesSettled === promises.length) {
            resolve(results);
          }
        });
      } else {
        results[index] = {
            status:"fulfilled",
            value:p
        };
        ++promisesSettled;
      }
    });
  });
}

myAllSettled([
  Promise.resolve(33),
  new Promise((resolve) => setTimeout(() => resolve(66), 0)),
  99,
  Promise.reject(new Error("an error")),
]).then((values) =>
  console.log(
    Object.values(values)
      .map((v) => JSON.stringify(v))
      .join(" ")
  )
);
