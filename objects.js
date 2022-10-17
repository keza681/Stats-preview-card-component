            // CONSOLE.TABLE  TO PRINT A TABLE OF OBJECTS

// const products = [

//     {
//         id: 1,
//         name: "konyagi",
//         price: "10000fr",
//         exp: "2022/12/23"
//     },
//     {
//         id: 2,
//         name: "konyagi",
//         price: "7000fr",
//         exp: "2022/12/23"
//     },
//     {
//         id: 3,
//         name: "pizza",
//         price: "14000fr",
//         exp: "022/12/23"
//     }
// ]; 


// var id = prompt("ID");

// const productExist = products.filter(function(p) {
//     return p["id"]!=id;
// });
// console.table(productExist);

// var myArray = new Array();
// myArray[0] = 8;
// myArray[1] = "hello";


var myCar = new Object();
myCar.maxSpeed = 50;
myCar.driver = "Shaun"
myCar.drive = function(){
    console.log("now driving");
};

myCar.drive();
console.table(myCar);
