function subset(larger, smaller) {
    const map = new Map();
    for (let index = 0; index < larger.length; ++index) {
        map.set(index, larger[index]);
    }

    for (let index = 0; index < smaller.length; ++index) {
        if (!map.has(smaller[index]))
            return false;
    }
    console.log(map, Object.entries(map));
    return true;
}
console.log(subset([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], [1, 2, 3]));
