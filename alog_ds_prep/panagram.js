const alphabets = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
];
function isPangram(string) {
    const lowerCasedString = string.toLowerCase();
    for (let char of alphabets) {
        if (!lowerCasedString.includes(char))
            return false;
    }
    return true;
}
function isPangram2(string) {
    const lowerCasedString = string.toLowerCase();
    function cb(char) {
        return lowerCasedString.includes(char);
    }
    return alphabets.every(cb);
}
console.log(isPangram("A quick brown fox jumps over the little lazy dog."));
