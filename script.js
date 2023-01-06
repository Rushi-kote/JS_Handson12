// Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype
const objectCreat = {
    funame: function () {
      console.log(`${this.name}, ${this.age},`);
    },
  };
  
  const obj1 = Object.create(objectCreat);
  obj1.name = 'Rushi';
  obj1.age = 23;
  obj1.funame();
  
  const obj2 = Object.create(objectCreat);
  obj2.name = 'Ravi Kumar Yadav';
  obj2.age = 50;
  obj2.funame();
  

//   Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays
  const ArraySum = {
    Sum: function (arr) {
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
      }
      console.log('sum: ', sum);
    }
  };
  
  ArraySum.Sum([1,2,3,4,5,6,7,8,9]);
  

 console.log(Object.getOwnPropertyNames(obj2));