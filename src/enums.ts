//for Enums we use PascalCase, it is like camelCase but the first alphabet is also capital. PascalCase...
//Numeric Enums

// enum RollNumbers {
//   Hassam, //0
//   Arif,  //1
//   Usama, //2
//   Asif, //3
//   Ali,  //4
//   Usman,  //5
// }

// enum RollNumbers {
//   Hassam = 1,
//   Arif,
//   Usama,
//   Asif,
//   Ali,
//   Usman,
// }

// console.log(RollNumbers);

const enum RollNumbers {
  Hassam = 1,
  Arif,
  Usama,
  Asif,
  Ali,
  Usman,
}

let studentList: RollNumbers = RollNumbers.Ali;
let studentList1: RollNumbers = RollNumbers.Hassam;
console.log(studentList); //output ===> 5
console.log(studentList1); //output ===> 5

//String types for enums

// enum StudentDetails {
//   Name = "Hassam",
//   Major = "Science",
// }

// const enum StudentDetails {
//   Name = "Hassam",
//   Major = "Science",
// }

// let studentName: StudentDetails = StudentDetails.Name;
// let studentMajor: StudentDetails = StudentDetails.Major;
// console.log(studentName, studentMajor);

//Hetrogeneous Enum

const enum StudentDetails {
  ID = 1,
  Name = "Hassam",
  Major = "Science",
}

let studentID: StudentDetails = StudentDetails.ID;
let studentName: StudentDetails = StudentDetails.Name;
let studentMajor: StudentDetails = StudentDetails.Major;
console.log(`${studentID}- ${studentName} has a major in ${studentMajor}`);
