//buffer is in hexa decimal
//buffer stores binary -> 01

const b= new Buffer.from("Aryan");
// console.log(b);// in hexa decimal
// console.log(b.toString())// converts to string 
// console.log(b.toJSON())//converts to decimal


b.write('XYZ')// it convert the above in this from starting and till where the buffer ris created , eg Aryan is a bufeer of 5 digit fixed length
console.log(b.toString())

// in general buffer banane ki khud se jarurat nhi padti

