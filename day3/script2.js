//Assignment: 1 to 100 numbers divided by 3 and 5,array push result in array
var result=[];
for(var i=1;i<=150;i++){
    if(i%3===0 && i%5===0){
        result.push(i);
    }
}
console.log("Array result: ",result)