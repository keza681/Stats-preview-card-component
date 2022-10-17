// ARRAY is a special variable, which can hold more than one value





// const lastIndex = bigsur.length - 1;
// console.log(lastIndex)


// var numbers = [1, 2, 4, 5, 6, 7 , 8];

// sum = 0;



// var x = [];

// for (let i=0; i<= 10000; i++){
//     if (i % 2 ==0){
//         x.push(i)
//     }
// }

// console.log(x);



// var x = [];
// var sum = 0;
// var av;

// for(let i=1; i<= 10000; i++){
//     sum = sum +i;
//     av = sum/10000;
// }

// console.log(av);



// function x


// FILTER , FIND, INDEX OF

// var bigsur = ["heritier", "sabine", "noella", "alice", "sifa"];

// console.log(bigsur.indexOf("noella"));


// function searchStudent(name){
//     return bigsur.indexOf(name)
// }

// const output = searchStudent("stella");
// console.log(output);

// if( searchStudent > 0)


var bigSur = ["Heritier", "Sabine", "Noella", "Sifa"];

var netBrain = ["Fiona", "Fabiola", "Marius"];

var studentName = prompt("Enter student's name");

if(bigSur.indexOf(studentName)>=0){
    alert(`${studentName} is in bigsur class`);
}else if(netBrain.indexOf(studentName)>=0){
    alert(`${studentName} is in netBrain class`);
}else{
    alert(`${studentName} is invalid`);
}


