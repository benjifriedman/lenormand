// function makeItHappen() {

//     for (var i = 0; i < numberArray.length; i++) {

//         console.log('images/' + currentNum + '.jpg');

//     image[i].src = 'images/' + currentNum + '.jpg'; 

//     console.log(randomNum);
//     randomNum++;

//     currentNum = numberArray.shift();

//     }//for loop

// }//makeItHappen


// var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];

// shuffle(numberArray);

// function makeItHappen() {

//     for (var i = 0; i < numberArray.length; i++) {

//     console.log(randomNum);
//     randomNum++;

//     }//for loop

// }//makeItHappen


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

    var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];

    shuffle(numberArray);

    image1.src = 'images/' + numberArray.shift() + '.jpg';
    image2.src = 'images/' + numberArray.shift() + '.jpg';
    image3.src = 'images/' + numberArray.shift() + '.jpg';
    image4.src = 'images/' + numberArray.shift() + '.jpg';
    image5.src = 'images/' + numberArray.shift() + '.jpg';
    image6.src = 'images/' + numberArray.shift() + '.jpg';
    image7.src = 'images/' + numberArray.shift() + '.jpg';
    image8.src = 'images/' + numberArray.shift() + '.jpg';
    image9.src = 'images/' + numberArray.shift() + '.jpg';
    image10.src = 'images/' + numberArray.shift() + '.jpg';
    image11.src = 'images/' + numberArray.shift() + '.jpg';
    image12.src = 'images/' + numberArray.shift() + '.jpg';
    image13.src = 'images/' + numberArray.shift() + '.jpg';
    image14.src = 'images/' + numberArray.shift() + '.jpg';
    image15.src = 'images/' + numberArray.shift() + '.jpg';
    image16.src = 'images/' + numberArray.shift() + '.jpg';
    image17.src = 'images/' + numberArray.shift() + '.jpg';
    image18.src = 'images/' + numberArray.shift() + '.jpg';
    image19.src = 'images/' + numberArray.shift() + '.jpg';
    image20.src = 'images/' + numberArray.shift() + '.jpg';
    image21.src = 'images/' + numberArray.shift() + '.jpg';
    image22.src = 'images/' + numberArray.shift() + '.jpg';
    image23.src = 'images/' + numberArray.shift() + '.jpg';
    image24.src = 'images/' + numberArray.shift() + '.jpg';
    image25.src = 'images/' + numberArray.shift() + '.jpg';
    image26.src = 'images/' + numberArray.shift() + '.jpg';
    image27.src = 'images/' + numberArray.shift() + '.jpg';
    image28.src = 'images/' + numberArray.shift() + '.jpg';
    image29.src = 'images/' + numberArray.shift() + '.jpg';
    image30.src = 'images/' + numberArray.shift() + '.jpg';
    image31.src = 'images/' + numberArray.shift() + '.jpg';
    image32.src = 'images/' + numberArray.shift() + '.jpg';
    image33.src = 'images/' + numberArray.shift() + '.jpg';
    image34.src = 'images/' + numberArray.shift() + '.jpg';
    image35.src = 'images/' + numberArray.shift() + '.jpg';
    image36.src = 'images/' + numberArray.shift() + '.jpg';

}//makeItHappen

