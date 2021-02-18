"use strict";

let rot13info = {
  output: "",
  inputLetters: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  outputLetters: "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm",
}

function rot13(input) {
    let encoded = "";
    for (let i = 0; i < input.length; i++) {
      if (!rot13info.inputLetters.includes(input[i])) {
        encoded += input[i]
        continue;
      }
      const indexOfLetter = rot13info.inputLetters.indexOf(input[i]);
      encoded += rot13info.outputLetters[indexOfLetter]
    }
    return encoded;
}

