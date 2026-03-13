let arr=[1,2,3,4,5]
let newarr=[]
arr.forEach(ele=>newarr.push(ele%2==0 ?"even":"odd"))
console.log(newarr)
//map 
let arr1=["pavan kumar","Aravind","Aditya","vinnu"]
let newarr1= arr1.map(ele=>ele.toUpperCase())
let newarr2=arr1.map(ele=>ele.toLowerCase())
console.log(newarr1);
console.log(newarr2);
//fiter : if checks the conditions satisfy  it returns the values
let array=[19,35,13,15,56]
let array1=array.filter(ele=> ele>=18)
console.log(array1)
//forEach examples
let arr3=[10,20,30,40]
arr3.forEach(ele=> console.log(ele))
console.log("=============")
let arr4=[2,3,4]
 arr4.forEach(ele=>console.log(ele**2))
console.log("=============")
let arr5=[5,10,15,20,25]
arr5.forEach(ele=>{
    if(ele%2==0){
        console.log(ele);
        
    }
})
//map examples
let arr6=[10,20,30]
let newarr6=[]
arr6.map(ele=>newarr6.push(ele+5))
console.log(newarr6)
//fiter examples
let arr7=[10,25,30,15,5]
 let newarr7=arr7.filter(ele=>ele>=20)
 console.log(newarr7);
 let arr8=[3,6,9,12,15]
 let newarr8=arr8.filter(ele=>ele%2==0)
 console.log(newarr8);
 
 

    



