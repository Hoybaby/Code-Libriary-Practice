// it is not very hard to reverse a string
// first we must convert the string into an array, by doing a split then using the reverse method then joining the array into a string

const revString = (str) => {
    const arr = str.split("");
    arr.reverse();
    str = arr.join("");
    console.log(str);
}

revString("father");

// this works