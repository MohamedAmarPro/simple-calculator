firstValue = parseInt(prompt("tape 1"))
operator =  prompt("tape operator");
secondValue =  parseInt(prompt("tape 2"));

// switch (operator) {
//   case "+":
//   console.log(firstValue+secondValue)
//     break;
//   case "-":
//     console.log(firstValue-secondValue)
//     break;
//   case "*":
//     console.log(firstValue*secondValue)
//     break;
//   default:
//     console.log("operator no valid")
//     break;
// }


function calculator (firstValue,secondValue) {
  switch (operator) {
    case "+":
    console.log(firstValue+secondValue)
      break;
    case "-":
      console.log(firstValue-secondValue)
      break;
    case "*":
      console.log(firstValue*secondValue)
      break;
    default:
      console.log("operator no valid")
      break;
  }
}
