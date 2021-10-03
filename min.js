function min(arr){
    let smallest=arr[0]
    for(let i=0; i<arr.length; i+=1)
    { 
        if(arr[i]<smallest)
        smallest=arr[i];
    }
    return smallest;
}
let result=([1,7,1,0,5])
console.log(result)
