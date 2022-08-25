function reverse(string) {
    let stringMass = string.split("");
    let reverseString = "";
    for (let i = stringMass.length-1; i >= 0; i--) {
        reverseString += stringMass[i];    }
    return reverseString
}
let string = "Level UP coding";
console.log(reverse(string));