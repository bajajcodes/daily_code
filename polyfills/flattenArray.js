Array.prototype.myFlat = function(){
    var flattened = [];
    (
        function flattener(array){
            for (let index = 0; index < array.length; ++index) {
                if(array[index].constructor === Array){
                    flattener(array[index])
                }else{
                    flattened.push(array[index])
                }
            }
        }
    )(this)
    return flattened;
}

// Array.prototype.myFlat2 = function () {
//     var output = [];
//     iterate(output, this);
//     return output;
//   };
  
//   function iterate(output, array) {
//     for (let index = 0; index < array.length; ++index) {
//       transform(output, array[index]);
//     }
//   }
  
//   function transform(array, item) {
//     if (item.constructor === Array) {
//       iterate(array, item);
//     } else {
//       array.push(item);
//     }
//   }
   