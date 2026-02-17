 //Task1 
 let result=(name)=>    console.log("Hello "+name);

 result("pavan");
//Task 2
var add=(a,b)=>{
    console.log("sum of two numbers is "+(a+b));
}
add(10,20);
//Task3
//check even or odd using arrow function
var check=(num)=>{
if(num%2==0){
    console.log("if number is even ="+num);
}
else{
    console.log("if number is odd ="+num)
}
}
check(15);
//Task 5
//multiplication table 
let multiply=(num)=>{
    for(var i=1;i<=10;i++){
        console.log(num+"*"+i+"="+(num*i));
    }
}
multiply(15);
