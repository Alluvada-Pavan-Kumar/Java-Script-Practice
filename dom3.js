// let div=document.createElement("div");
// let p=document.createElement("p");
// p.innerHTML="<i>my name is pavan kumar</i>";
// div.append(p);
// console.log(div);
// document.body.append(div);


// let div=document.getElementsByClassName("container");
// console.log(div[0]);


// let arr=[{
//     id:"1",
//     name:"pavan"
// },
// { id:"2",
//     name:"kalyan"
// },
// { id:"3",
//     name:"<h1><u>bharath</u></h1>"
// },

// { id:"3",
//     name:"dinesh"
// }
// ]
// let container=document.getElementsByClassName("container")[0]
// arr.forEach(obj=>{
//     let p=document.createElement("p");
//     p.innerHTML=`
//     Id:${obj.id}
//     Name:${obj.name}
//     `
//     container.append(p);
// })
// document.body.append(container);


async function fetchdata() {
 let res=   await fetch("https://fakestoreapi.com/products");
   let data=await res.json();
   getdata(data)
}
function getdata(data){
    let container=document.getElementsByClassName("container")[0];
     data.forEach(ele => {
        let p=document.createElement("p");
        p.innerHTML=`
        <h3>Id:${ele.id}<h3>
        <p>description:${ele.description}</p>
          <img src='${ele.image}'>
        `
        container.appendChild(p);
     });
}
fetchdata();

