//Task 
//1
let arr=["OG","Geetha Govindham","Ramu weds Rambayi","Bhahubali"];
 for(let i=0;i<arr.length;i++){

   console.log(arr[i]);   
 }
 //2
 let arr1=[1,2,3,4,5,6,7,8];
 console.log("remove first element from an array : "+arr1.shift());
  console.log("remove last element from an array : "+arr1.pop());
//3
let arr2=[9,8,7,6,5,4,3,2,1];
for(let i=arr2.length-1; i>=0;i--){
    console.log("Reverse of an  array "+arr2[i]);
}
//4
let arr3=[12,3,5,6,22,56,29];
let evensum=0,oddsum=0;
for(let i=0;i<arr3.length;i++){
    if(arr3[i]%2==0){
        evensum+=arr3[i];
    }
    else{
        oddsum+=arr3[i];
    }
   
}
 console.log("evensum is :"+evensum);
console.log("oddsum is :"+oddsum);
//5
 let arr4 = ["apple", "banana", "mango", "banana", 3, 4, 5, 6, true, {name: "object"}];
 let num=[];
 let string=[];
 let bool=[];
 let object=[];
 for(let i=0;i<arr4.length;i++){
    if(typeof arr4[i]==="number"){
        num.push(arr4[i]);
    }
    else if(typeof arr4[i]==="string"){
        string.push(arr4[i]);
    }
    else if(typeof arr4[i]==="boolean"){
        bool.push(arr4[i]);
    }
    else if(typeof arr4[i]==="object"){
        object.push(arr4[i]);
    }
 }
 console.log("number :",num);
 console.log("String  :",string);
 console.log("boolean :",bool);
 console.log("Object:",object);
 // Task1 Using  concat
 let sports=["shuttle","cricket","baseBall","kabaddi"];
 let hobbies=["watching movies","cooking food","learing interesting  things"];
  console.log(sports.concat(hobbies));
// Task2 Splice
let numbers = [1,2,3,4,5,6,7,8,9,10];
console.log("Before splice:", numbers);
numbers.splice(3,3,40,50,60);

console.log("After splice:", numbers);
//Task3 slice
let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
console.log("Original array:", days);
let weekdays = days.slice(1,6);
console.log("Weekdays:", weekdays);