//  let div1=document.createElement("div")
// div1.innerText="<i style='color:red;'>Javascript</i>";
// console.log(div1)


// let div2=document.createElement("div");
// div2.innerHTML="<i style='color:blue;'>javascript</i>";
// console.log(div2)
// document.body.append(div1, div2);
// let div=document.createElement("div")
// div.id="main";
// div.className="container";
// div.setAttribute("name","value");
// console.log(div)
// let ol=document.createElement("ol")


// let arr=["raju","ranveer","swathi","gopi","thanmay","yamuna"];
// arr.forEach(ele=>{
//     let li=document.createElement("li")
// li.innerHTML=ele;
    
//      ol.append(li)
// })
// document.body.append(ol)
//  const student = [
//   {
//     id: 1,
//     name: "Rahul",
//     age: 21,
//     course: "Full Stack",
//     marks: 85
//   },
//   {
//     id: 2,
//     name: "Priya",
//     age: 22,
//     course: "Java",
//     marks: 78
//   },
//   {
//     id: 3,
//     name: "Arjun",
//     age: 20,
//     course: "Python",
//     marks: 92
//   },
//   {
//     id: 4,
//     name: "Sneha",
//     age: 23,
//     course: "React",
//     marks: 88
//   },
//   {
//     id: 5,
//     name: "Kiran",
//     age: 21,
//     course: "NodeJS",
//     marks: 75
//   },
//   {
//     id: 6,
//     name: "Anjali",
//     age: 22,
//     course: "Angular",
//     marks: 81
//   },
//   {
//     id: 7,
//     name: "Ravi",
//     age: 24,
//     course: "Java",
//     marks: 69
//   },
//   {
//     id: 8,
//     name: "Divya",
//     age: 20,
//     course: "Python",
//     marks: 90
//   },
//   {
//     id: 9,
//     name: "Vikram",
//     age: 23,
//     course: "React",
//     marks: 73
//   },
//   {
//     id: 10,
//     name: "Meena",
//     age: 21,
//     course: "Full Stack",
//     marks: 87
//   }
// ];
// let container=document.createElement("div");
// container.id="main";
// student.forEach(obj => {
//     let p=document.createElement("p");
//     p.innerHTML=`
//     <h3>Id :${obj.id}</h3>
//     <h4><i>name :${obj.name}</i></h4>
//     <p>course :${obj.course}</p>
//     `
//     container.append(p);
   
// });
// document.body.append(container);

//another example
let arr=["home","about","cno","project"];
let table=document.createElement("table");
let tr=document.createElement("tr")
table.style.border="1px solid";
table.cellpadding="5";
table.appendChild(tr)
for(let ar of arr){
    let td=document.createElement("td");
    td.innerText=ar;
    tr.appendChild(td);
}
document.body.append(table);