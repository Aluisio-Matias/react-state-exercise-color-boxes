/** Return a random item from an array. */

const choice = (arr) => {
    const randIdx = Math.floor(Math.random() * arr.length);
    return arr[randIdx];
}

export { choice };