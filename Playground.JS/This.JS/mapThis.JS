const morango = {
    value: 2,
}    

const amora = {
        value: 3,
}

function mapComThis(arr, thisArg) {
      return arr.map(function(item) {
        return item * this.value;
    }, thisArg);
}

const nums = [1, 3];

console.log('this -> morango', mapComThis(nums, morango));

console.log('this -> amora', mapComThis(nums, amora));