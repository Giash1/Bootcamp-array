function max(arr){
    let largest=arr[0]
    for(let i=0; i<arr.length; i+=1){
        if(arr[i]>largest)
        largest=arr[i]
    }
    return largest;
}
let result=max([1,7,1,0,5])
console.log(result)

