// async function fetchdata() {
//     let res=await fetch("https://dummyjson.com/todos");
//     let data=await res.json();
//     getdata(data.todos);

// }
//   function getdata(data){
//     let container=document.getElementsByClassName("container")[0];
//     data.forEach(ele => {
//         let p=document.createElement("p");
//         p.innerHTML=`
//          <p> Id:${ele.id}</p>
//          <p><u> TODO:${ele.todo}</u></p>
//          <h4> USERID:${ele.userId}</h4>
    
//         `
//         container.appendChild(p);
//     });
//   }
//   fetchdata();
//  async function  fetchdata(){
//   let res=await fetch("https://dummyjson.com/todos");
//   let data= await res.json();

// getdata(data.todos);
//  }
//  function getdata(data){
//   let container=document.getElementsByClassName("container")[0];
//  data.forEach(ele => {
//   let p=document.createElement("p");
//   p.innerHTML=`
//     Id:${ele.id}<br>
//     TODO:${ele.todo}<br>
//     USERId:${ele.userId}
//   `
//   container.append(p);
//  });
//  }
//  fetchdata();

// different arrays of objects

// async function fetchdata() {
//   let res=await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
//    let data=await res.json();
//    getdata(data.abilities);
// }
// function getdata(data){
//  let container=document.getElementsByClassName("container")[0];
//  data.forEach(element => {
//   let p=document.createElement("p");
//   p.innerHTML=`
//    Name:${element.ability.name}<br>
//     Slot:${element.slot}
//   `
//   container.append(p);
//  });
// }
// fetchdata();

//use conditional statements
async function fetchdata() {
  let res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  let data = await res.json();

  display(data.abilities, "abilities");
  display(data.moves, "moves");
  display(data.types, "types");
}

function display(data, type) {
  let container = document.querySelector(".container");

  data.forEach(ele => {
    let p = document.createElement("p");

    if(type === "abilities"){
      p.innerHTML = `Ability: ${ele.ability.name}
          Slot:${ele.slot}
      `;
    }
    else if(type === "moves"){
      p.innerHTML = `Move: ${ele.move.name}`;
    }
    else if(type === "forms"){
      p.innerHTML = `Type: ${ele.name}`;
    }

    container.append(p);
  });
}

fetchdata();