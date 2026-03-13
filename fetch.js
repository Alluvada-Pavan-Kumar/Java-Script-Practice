//get the data from the server
// const URL="http://localhost:3000/data";
// fetch(URL).then(res=>{
//     return  res.json();
// }).then(data=>{
//     data.forEach(ele => { 
//         if(ele.id==1){
//     console.log(ele.name)
//     }
// })
//delete the data from server
//   const URL="http://localhost:3000/data/3";
//   let options={
//     "method":"DELETE"
//  }
//  fetch(URL,options).then(res=>{
//     if(res.ok){
//         console.log(res.status,res.statusText);
//     }
//     else{
//         console.log("something went wrong");
//     }
//  })
 //post the data to server 
//  const URL="http://localhost:3000/data";
//  let options={
//     "method":"POST",
//     "headers":{
//         "content-type":"aplication/json"
//  },
//  "body":JSON.stringify({
//     "id":"4",
//     "name":"bharath"
//  })
// }
//  fetch(URL,options).then(res=>{
//     if(res.ok){
//         console.log(res.status,res.statusText);
//     }
//     else{
//         console.log("wrong");
//     }
//  })
 // post method in shortcut way
//  fetch("http://localhost:3000/data",{"method":"POST",
//     "heders":{
//         "content-Type":"application/json"
//     },
//     "body":JSON.stringify({
//         "id":"5",
//         "name":"sneha"
//     })

//  }).then(res=>{
//     if(res.ok){
//         console.log(res.status,res.statusText)
//     }
//     else{
//         console.log("something went wrong");    
//     }
//  })
 //patch data to the server
//  fetch("http://localhost:3000/data/5",{"method":"PATCH",
//     "heders":{
//         "content-Type":"application/json"
//     },
//     "body":JSON.stringify({
        
//         "name":"latha"
//     })

//  }).then(res=>{
//     if(res.ok){
//         console.log(res.status,res.statusText)
//     }
//     else{
//         console.log("something went wrong");    
//     }
//  })
 //delete all
 
        

 

