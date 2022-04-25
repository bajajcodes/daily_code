function tokenize(string, token) {
    const tokens = [];
    let newString = "";

    for (let index = 0; index < string.length; ++index) {
        const chard = string[index];
        if (chard === token) {
            if (newString !== "") {
                tokens.push(newString);
                newString = "";
            }
        } else {
            newString += chard;
        }
    }
    tokens.push(newString);
    return tokens;
}
