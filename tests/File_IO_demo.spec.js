const fs = require('fs');
const path = require('path');

// Define file path
const filePath = path.join(__dirname, 'demo.txt');

//  Step 1: Create and Write data to the file
const dataToWrite = 'A1,B2,C3,D4,E5,F6,G7,H8,I9,J0';
fs.writeFileSync(filePath, dataToWrite, 'utf-8');
console.log('File created and data written.');

//  Step 2: Read data from the file
const fileContent = fs.readFileSync(filePath, 'utf-8');
console.log('File content:');
console.log(fileContent);
