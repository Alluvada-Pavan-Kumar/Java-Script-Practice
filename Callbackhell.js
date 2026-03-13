//Example 1
setTimeout(function(){
console.log("step1 completed");

setTimeout (function(){
    console.log("step2 completed");

setTimeout(function(){
    console.log("step 3 completed");
},1000);
},1000);
},1000);
//Example 2
function getUser(userId, callback) {
    setTimeout(function() {
        console.log("User data fetched");
        callback({ id: userId, name: "Pavan" });
    }, 1000);
}

function getOrders(user, callback) {
    setTimeout(function() {
        console.log("Orders fetched");
        callback(["Order1", "Order2"]);
    }, 1000);
}

function makePayment(orders, callback) {
    setTimeout(function() {
        console.log("Payment successful");
        callback("Payment Done");
    }, 1000);
}

getUser(1, function(user) {
    getOrders(user, function(orders) {
        makePayment(orders, function(status) {
            console.log(status);
        });
    });
});
 // example
 function sum(val,callback){
    setTimeout(()=>{
        callback(val+5)
        
    },3000);
 }
 function sub(val,callback){
    setTimeout(()=>{
        callback(val-5)
    },1000);
 }
 function mul(val,callback){
   
     callback(val*2)   
 }
 function div(val,callback){
    callback(val/2)
 }
 sum(10,(sumres)=>{
    console.log(sumres);
    sub(sumres,(subres)=>{
        console.log(subres);
        mul(subres,(mulres)=>{
            console.log(mulres);
         div(mulres, (divres) => {
              console.log(divres);

           })

        })
    })
})
