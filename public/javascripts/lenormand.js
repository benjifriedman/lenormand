
function shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    return array;
}//shuffle

function makeItHappen() {

    for (var i = 0; i < numberArray.length; i++) {

        console.log('images/' + currentNum + '.jpg');

    image[i].src = 'images/' + currentNum + '.jpg'; 

    console.log(randomNum);
    randomNum++;

    currentNum = numberArray.shift();

    }//for loop

}//makeItHappen



var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];

shuffle(numberArray);

var currentNum = numberArray[0];

var randomNum = 0;

makeItHappen();




function makeItHappen() {

    for (var i = 0; i < numberArray.length; i++) {

    console.log(randomNum);
    randomNum++;

    }//for loop

}//makeItHappen

