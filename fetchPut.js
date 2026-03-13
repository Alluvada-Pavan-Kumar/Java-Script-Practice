const URL="http://localhost:3000/data/3";
let options={
    "method":"PATCH",
    "headers":{
        "content-type":"application/json"
    },
    "body":JSON.stringify({
        
        "name":"monkey"
    })
}
fetch(URL,options).then((res=>{
    if(res.ok){
        console.log(res.status,res.statusText);
    }
    else{
        console.log("something went wrong");
    }
})).catch(res=>console.log(res));