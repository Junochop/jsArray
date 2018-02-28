

//challenge 1

var test1 = "cat";
function reverseString(str) {
    return str.split("").reverse().join("");
}
var result = reverseString(test1);

console.log(result);

if (test1 === result){
    console.log("true");
} else {
    console.log("false");
}

// another take

var test = "racecar";
var opp = test.split("").reverse().join("");
if (test === opp) {
    console.log("same", true);
}else {
    console.log("same", false);
}