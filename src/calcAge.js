//  global scoping
//  function scoping
// block scoping

function calcAge() {
  console.log(age);
  var name = "cd";
  function calcName() {
    console.log(name);
  }
  calcName();
}
const age = 90;
calcAge();
