

//challenge 1
function reverseString(str) {
    return str.split("").reverse().join("");
}
var test1 = "cat";
var test2 = "mom";

var result1 = reverseString(test1);
var result2 = reverseString(test2);
console.log(result1);


if (test1 === result1){
    console.log("true");
} else {
    console.log("false");
} //should be false

if (test2 === result2) {
    console.log("true");
} else {
    console.log("false");
}  //should be true

//----------- another take -------------------------------------

var test = "racecar";
var opp = test.split("").reverse().join("");
if (test === opp) {
    console.log("same", true);
} else {
    console.log("same", false);
}  //should be true

//challenge 2
var animals = ["cat", "dog", "moose"];
var animalzElement = document.getElementById('animalz');

for (var i =0; i<animals.length; i++){
    console.log("animals:", animals[i]);
    animalzElement.innerHTML += '<h5>' + animals[i]+ '</h5>';  // replace it everytime so use +=
}


//Challenge 2
var book1 = "Catch 22";
var book2 = "Slaughterhouse 5";
var book3 = "Farenheit 451";


// var challenge2 = book1.replace(/\D/g, '');
// console.log("challenge2", challenge2);

function replace(book) {
    var strip = book.replace(/\D/g, '')
    return strip;
}

console.log("result:", replace(book3));

var allBooks = [book1, book2, book3];

for(k = 0; k < allBooks.length; k++) {
    console.log("print function:", replace(allBooks[k])); 
}


//Another take of Challenge 2
var bookz = "catch 22";
var bookSplit = bookz.split("");
var realNumbz = [];
for(var j=0; j<bookSplit.length; j++){
   
    if ((bookSplit[j] * 1)) {             // or if((bookSplit[j]*1 == true))
        realNumbz.push(bookSplit[j]);
    };

}

console.log("answer:", realNumbz.join(""));














