// Your Script here.

const lookup = {
  A: "N",
  B: "O",
  C: "P",
  D: "Q",
  E: "R",
  F: "S",
  G: "T",
  H: "U",
  I: "V",
  J: "W",
  K: "X",
  L: "Y",
  M: "Z",
  N: "A",
  O: "B",
  P: "C",
  Q: "D",
  R: "E",
  S: "F",
  T: "G",
  U: "H",
  V: "I",
  W: "J",
  X: "K",
  Y: "L",
  Z: "M",
  "?": "?",
  ",": ",",
};

function rot13(encodedStr) {
   // Your Result goes here
  // Only change code below this line
	let encrypted = "";
    
    // Run loop through string
    for(let i = 0; i < s.length; i++) {
        // get character
        const char = s[i];
        
        if (char.match(/[a-zA-Z]/)) {
            // check if upper case or lower case
            const isUpperCase = char === char.toUpperCase();
            // get base of charCode
            const base = isUpperCase ? "A".charCodeAt() : "a".charCodeAt();
            // Calculate shift. Ex: (x(120) - a(base: 97) + 4) % 26 = 1
            const shift = (char.charCodeAt() - base + k) % 26;
            // find shift char a(base: 97) + shift(1) = 98
            const shiftedChar = String.fromCharCode(base + shift);
            
            // return
            encrypted += shiftedChar;
        } else {
            // return if not char
            encrypted += char;
        }

  return; //return decodedArr
}

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(rot13("SERR YBIR? NPPVBWBO"));

// Do not change this line
window.rot13 = rot13;
