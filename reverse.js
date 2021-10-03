//reverse strängar i en array

let arr = ["Gösta", "Kalle", "Olof"];

function reverseStrings(arr){
    //skapa en tom array där vi skall skicka in varje omvända namn
    let newArr = [];

    //Loopa igenom varje namn i vår array
    for (let i = 0; i <= arr.length; i++) {
        let temp = "";
        let name = arr[i];
        //Loopa igenom varje bokstav i vårt namn baklänges
        for (let j = name.length - 1; j >= 0; j--) {
            //För varje bokstav lägger vi in den i vår temporära sträng
            temp = temp + name[j]
        }
        //För varje omvandlade namn så pushar vi in det i vår nya array
        newArr.push(temp);
    }
}
let result= reverseStrings(["Gösta", "Kalle", "Olof"])
console.log(result);