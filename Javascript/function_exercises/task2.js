let triangletype=(side1,side2,side3)=>
{
    if(side1==side2 && side2==side==3 && side3==side1)
    {
        console.log("Equilateral triangle")
    }
    else if(side1==side2 || side2==side3 || side3==side1)
    {
        console.log("isosceles triangle")
    }
    else{
        console.log("scalene triangle")
    }
}
triangletype(1,2,3)