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

const scores = [57, 46, 65, 72, 44, 68, 52, 62, 59, 70, 55];

// forEach
// staffs.forEach((staff) => {
//   console.log(
//     `${staff.firstname} ${staff.surname} is ${staff.age} years old, and earns ${staff.salary} monthly.`
//   );
// });

// Map
// const surname = staffs.map((staff) => {
//   return staff.surname;
// });

const surname = staffs.map((staff) => staff.surname);
// console.log(surname);

// const details = staffs.map((staff) => {
//   return `${staff.surname} earns ${staff.salary} monthly.`;
// });

const details = staffs.map(
  (staff) => `${staff.surname} earns ${staff.salary} monthly.`
);

// console.log(details);

const scoresSqrt = scores
  .map((score) => Math.sqrt(score))
  .map((score) => score * 2)
  .map((score) => Math.floor(score / 5));
// console.log(scoresSqrt);

// Filter
// const passScores = scores.filter((score) => {
//   if (score >= 50) {
//     return true;
//   }
// });

const passScores = scores.filter((score) => score >= 50);

// console.log(passScores);

// const maleStaffs = staffs.filter((staff) => {
//   if (staff.gender === "Male") {
//     return true;
//   }
// });

const maleStaffs = staffs.filter((staff) => staff.gender === "Male");

// console.log(maleStaffs);

// Sort
const sort = scores.sort((a, b) => b - a);
// console.log(sort);

// Reduce
// const totalScores = scores.reduce((total, score) => {
//   return total + score;
// }, 0);

const totalScores = scores.reduce((total, score) => total + score, 0);

// console.log(totalScores);

// const totalSalaries = staffs.reduce((total, staff) => {
//   return total + staff.salary;
// }, 0);

const totalSalaries = staffs.reduce((total, staff) => total + staff.salary, 0);

// console.log(totalSalaries);
