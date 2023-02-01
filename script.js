const staffs = [
  {
    firstname: "Vanessa",
    surname: "Rogers",
    gender: "Female",
    age: 19,
    salary: 60193,
  },
  {
    firstname: "Charlotte",
    surname: "Hunt",
    gender: "Female",
    age: 24,
    salary: 92383,
  },
  {
    firstname: "Marcus",
    surname: "Foster",
    gender: "Male",
    age: 21,
    salary: 65760,
  },
  {
    firstname: "Myra",
    surname: "Brooks",
    gender: "Female",
    age: 21,
    salary: 174036,
  },
  {
    firstname: "Steven",
    surname: "Cooper",
    gender: "Male",
    age: 20,
    salary: 68263,
  },
  {
    firstname: "Kevin",
    surname: "Armstrong",
    gender: "Male",
    age: 26,
    salary: 34782,
  },
  {
    firstname: "Belinda",
    surname: "Carroll",
    gender: "Female",
    age: 19,
    salary: 188935,
  },
  {
    firstname: "Xavier",
    surname: "Harrison",
    gender: "Male",
    age: 29,
    salary: 149879,
  },
];

const scores = [57, 46, 65, 72, 44, 68, 5, 62, 59, 70, 55];

// forEach
// staffs.forEach((staff) => {
//   console.log(
//     `${staff.firstname} ${staff.surname} is ${staff.age} years old, and earns ${staff.salary} monthly.`
//   );
// });

// Map
// Get Firstnames
// const firstNames = staffs.map((staff) => {
//   return staff.firstname;
// });

const firstNames = staffs.map((staff) => staff.firstname);

// console.log(firstNames);

// Get Details
// const details = staffs.map((staff) => {
//   return `${staff.surname} earns ${staff.salary} monthly.`;
// });

const details = staffs.map(
  (staff) => `${staff.surname} earns ${staff.salary} monthly.`
);

// console.log(details);

// Get SquareRoot
const squareRoot = scores
  .map((score) => Math.sqrt(score))
  .map((score) => score * 2)
  .map((score) => Math.floor(score / 5));

// console.log(squareRoot);

// Filter
// Get Fail marks
// const failMark = scores.filter((score) => {
//   if (score <= 49) {
//     return true;
//   }
// });

const failMark = scores.filter((score) => score <= 49);

// console.log(failMark);

// Filter Male Staffs
// const maleStaffs = staffs.filter((staff) => {
//   if (staff.gender === "Male") {
//     return true;
//   }
// });

const maleStaffs = staffs.filter((staff) => staff.gender === "Male");

// console.log(maleStaffs);

const richStaffs = staffs.filter((staff) => staff.salary >= 100000);

// console.log(richStaffs);

// Sort
const sort = scores.sort((a, b) => b - a);

// console.log(sort);

// Reduce
// Get total scores
// const totalScores = scores.reduce((total, score) => {
//   return total + score;
// }, 0);

const totalScores = scores.reduce((total, score) => total + score, 0);

// console.log(totalScores);

// const totalSalaries = staffs.reduce((total, staff) => {
//   return total + staff.salary;
// }, 0);

const totalSalaries = staffs.reduce((total, staff) => total + staff.salary, 0);

console.log(totalSalaries);
