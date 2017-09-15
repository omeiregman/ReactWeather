/*function getTempCallback (location, callback){
  callback(undefined, 78);
  callback('city not found');

}

getTempCallback('Philadelphia', function(err, temp){
  if (err) {
    console.log('error', err);
  } else {
    console.log('success', temp)
  }
  }
);


function getTempPromise(location) {
  return new Promise(function(resolve, reject){
    resolve(79);
    reject('City not found again');
  });
}

getTempPromise('Philadelphia').then(function(temp){
  console.log('Proomise Success', temp);
}, function (err) {
  console.log('Promise error, err')
});
*/

//Challenge

function addPromise (a, b) {

  return new Promise(function(resolve, reject){
    if (typeof a === 'number' && typeof b === 'number'){
      var c = a+b;
      resolve(c);
    } else {
      reject('not a number');
    }


  });
}

addPromise('r', 6).then(function (c){
  console.log('promise success', c);
}, function (err) {
  console.log('promise error', err);
});
