function indexOfElement(arr, element){
    for(let i=0; i<arr.length; i+=1){
        if(arr[i]==element)
    return i;
    }
    return -1;
}
let result=indexOfElement([1,7,1,0,5],1);
//let result=indexOfElement([1,7,1,0,5],8);
console.log(result);