// Write your solution below:

/* Write a function to remove all duplicate letters from a provided string.
The string will only contain lowercase letters between a - z. The string will not contain spaces.
*/

function makeUnique(word) {
    let newWord = '';
    for(let i = 0; i < word.length; i++) {
        if(!newWord.includes(word[i])) {
            newWord += word[i];
        }
    }
    return newWord;
}


console.log(makeUnique('helloworld')); // prints helowrd
console.log(makeUnique('iwanttoclimbamountain')); // prints iwantoclmbmu
