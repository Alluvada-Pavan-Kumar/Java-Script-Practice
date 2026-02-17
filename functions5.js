//Task1
function greet(name){
    console.log("Hello,"+name+"!");
    
}
greet("pavan");
greet("sujith");
//Task 2
function sum(a,b){
    return a+b;
}
console.log(sum(5,10));
console.log(sum(15,20));
console.log(sum(25,30));
//Task3
function square(num){
    return num*num;
}
console.log(square(5));
console.log(square(10));
console.log(square(25));
//Task 4
function average(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }

    return sum / arr.length;
}

console.log(average([2, 5, 2]));
console.log(average([10, 20, 30]));
console.log(average([1, 2, 3, 4]));
//Task5
function checkVowels(str) {
    var vowels = "aeiouAEIOU";
    var found = false;
    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < vowels.length; j++) {

            if (str[i] == vowels[j]) {
                found = true;
                break;
            }
        }

        if (found) {
            break;
        }
    }

    if (found) {
        return "It contains vowels";
    } else {
        return "It doesn't contain vowels";
    }
}

console.log(checkVowels("hello"));
console.log(checkVowels("hll"));
console.log(checkVowels("sky"));
console.log(checkVowels("APPLE"));
//Task6
function convertTemperature(temp, scale) {
    if (scale == "C") {
        return (temp - 32) * 5 / 9;
    }
    else if (scale == "F") {
        return (temp * 9 / 5) + 32;
    }
    else {
        return "Invalid scale. Use 'C' or 'F'";
    }
}
console.log(convertTemperature(32, "C"));  
console.log(convertTemperature(0, "F"));   
console.log(convertTemperature(100, "C")); 
console.log(convertTemperature(25, "F"));  
