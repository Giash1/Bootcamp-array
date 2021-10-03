function containsElement(arr, element)
{
    for(let i=0; i<arr.length; i+=1){
        if(arr[i]==element)
        return true;

    }
    return false;
}

let result=containsElement([1,7,1,0,5],1);
console.log(result);



