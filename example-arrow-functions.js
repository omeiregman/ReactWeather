var names = ['Andrew', 'Peter', 'Jenny'];

names.forEach(function (name) {
  console.log('forEach', name);
});

names.forEach((name)=> {
  console.log('arrowFunc', name);
});

names.forEach((name) => console.log(name));

var returnMe = (name) => name + '!';
console.log(returnMe('Andrew'));


var addStatement = (a, b) => {
  console.log(a + b);
};

var addExpression = ((a, b) => console.log(a + b));


addStatement(5,5);
addExpression(6,6);
