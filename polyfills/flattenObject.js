function flatObject(object) {
  var flattened = {};
  (function flattener(object, keyName) {
    Object.keys(object).forEach(k => {
        var v = object[k];
        var newKey = keyName ? `${keyName}_${k}` : k;
        if(v.constructor === Object){
            flattener(v,newKey);
        }else{
            flattened[newKey] = v;
        }
    });
  })(object);
  return flattened;
}

console.log(
  flatObject({
    name: "Vishal",
    address: {
      primary: {
        house: "109",
        street: {
          main: "21",
          cross: "32",
        },
      },
    },
  })
);
