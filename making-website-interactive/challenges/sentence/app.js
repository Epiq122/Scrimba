// The generateSentence(desc, arr) takes two parameterer: a description and an array.
// It should return a string based upon the description and array.

// Example 1: if you pass in "largest countries",and ["China", "India", "USA"],
// it should return the string: "The 3 largest countries are China, India, USA"

// Example 2: If you pass in "best fruits" and ["Apples", "Bananas"], it should return:
// "The 2 best fruits are Apples, Bananas"

// Use both a for loop and a template string to solve the challenge


function generateSentence(desc, arr) {
    const itemCount = arr.length;
    let itemList = ''
    for (let i = 0; i < itemCount; i++) {
        itemList += arr[i]
        if (i < itemCount - 1) {
            itemList += ', '
        }
    }
    console.log(`The ${itemCount} ${desc} are ${itemList}`)
}

generateSentence("best games", ['Final Fantasy', 'Mario'])
generateSentence("best movies", ['Die Hard', 'Mighty Ducks', 'Rememeber the titans'])


// same as above just easier
function generateSentence2(desc, arr) {
    console.log(`The ${arr.length} ${desc} are ${arr.join(', ')}`)
}

generateSentence2("best games", ['Final Fantasy', 'Mario'])
generateSentence2("best movies", ['Die Hard', 'Mighty Ducks', 'Remember the Titans'])
