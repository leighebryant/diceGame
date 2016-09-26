var dog = {
  name: 'Abbie',
  breed: 'Whippet',
  toy: 'Tennis Ball',
  bio: function() {
    console.log('My name is '+this.name +' and I like playing with a '+this.toy +'.');
  }
};
// dog.age = 4;
// dog.friend = "Rosko";
// console.log(dog)
// dog.friend = 'Ragnar';
// console.log(dog)

console.log(Object.keys(dog));
