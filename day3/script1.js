// Assignment: generate evenNumbers and oddNumbers arrays by using the loops
var evenNumbers=[];
var oddNumbers=[];
var n=150;
for(let i=0;i<=n;i++){
    if(i%2===0){
        evenNumbers.push(i);
    }else{
        oddNumbers.push(i);
    }
}
console.log("Even Numbers ",evenNumbers);
console.log("Odd Numbers ",oddNumbers);