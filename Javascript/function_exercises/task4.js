let evalNumbers=(num1,num2,operation)=>
{
  if(operation==="add"){
  console.log(num1 + num2);
  }
  else if(operation==="subtract"){
    console.log(num1 - num2);
  }
  else if(operation==="multiplication"){
    console.log(num1 * num2);
  }
  else if(operation==="divide"){
      console.log(num1 / num2);
  }
  else if(operation==="modulus"){
    console.log(num1 % num2);
  }
else{
  console.log("error")
}
}
evalNumbers(5,3,"add")
evalNumbers(5,3,"subtract")
evalNumbers(5,3,"multiplication")
evalNumbers(5,3,"divide")
evalNumbers(5,3,"modulus")