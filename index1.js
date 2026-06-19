for(key in object){
    console.log(key);
}

const person ={
    fname : "Satyam",
    lname : "Singh",
    age : 20
};
for(let x in person){
    console.log("person details:"+ x + " : " + person[x]);
}