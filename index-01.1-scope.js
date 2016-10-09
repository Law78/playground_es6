
function example14_a(){
  // la a è bound alla a globale in compile time
  console.log('Example14_a: ', a);
}


function example14_b(){
  var a = 10;
  //example14_a();
  test = example14_a.bind(this);
  test();
  console.log('Example14_b: ',a);
}




var a = 20;
example14_b();
example14_a();
