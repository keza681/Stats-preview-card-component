            // CONSOLE.TABLE  TO PRINT A TABLE OF OBJECTS

const products = [
    {
        id: 1,
        name: "konyagi",
        price: "10000fr",
        exp: "2022/12/23"
    },
    {
        id: 2,
        name: "konyagi",
        price: "7000fr",
        exp: "2022/12/23"
    },
    {
        id: 3,
        name: "pizza",
        price: "14000fr",
        exp: "2022/12/23"
    }
]; 

var id = prompt("ID");

const productExist = products.filter(function(p) {
    return p["id"]!=id;
});

console.table(productExist);