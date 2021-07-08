// Type Inference

let myName = 'Stephen';
// myName = 10;
/* 
myName = 10 is an error because typescript assumes that when we declare let myName = "Stephen" to be a string
*/

//myScript is any
// let myScript;

let myScript: string;

if (1 === 1) {
  myScript = 'Typescript';
} else {
  myScript = 'C++'
}

