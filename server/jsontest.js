const obje={
    name:"sagar",
    age : 22,
    address:"indore"
}
const jsondata=JSON.stringify(obje);
console.log(jsondata);
const objedata=JSON.parse(jsodata);
console.log(objedata);