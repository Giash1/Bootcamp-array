//Our very own split function

let ownSplit = function (x) {

    let array = [];
    let temp = "";

    //här loopar vi igenom varje karaktär i vår string x
    for (let i = 0; i < x.length; i++) {

        let el = x[i];

        //kolla om det är ett mellanslag - då skall texten innan pushas in i vår array
        if (el === " ") {
            //pusha in textbiten till array
            array.push(temp);
            temp = " ";
        }
        //Om vi inte matchar mot ett space så betyder det att vi stött på en bokstav
        if (el !== " ") {
            // och denna lägger vi in i vår temporära sträng temp
            temp = temp + el;
        }
    }
}