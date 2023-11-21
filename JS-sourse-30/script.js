// const x = [
//     {
//         name: "Ali",
//         age: 20
//     }, {
//         name: "Ramin",
//         age: 20
//     }
// ]

// console.log(x);

const students = [];

const numberOfStudent = Number(prompt("How many students do you have : "));

for (let i = 0; i < numberOfStudent; i++) {
    const student = {};
    const scores = [];
    student.name = prompt(`Enter name of student ${i + 1} : `);
    student.city = prompt(`Enter city of student ${i + 1} : `);
    const numberOfScore = Number(prompt("How many scores do you want to enter : "));
    let sumOfScores = 0;
    for (let j = 0; j < numberOfScore; j++) {
        const score = Number(prompt(`Enter score ${j + 1} ${student.name}`));
        scores.push(score);
        sumOfScores += score;
    }
    student.scores = scores;
    student.averageOfScores = sumOfScores / numberOfScore;
    students.push(student);
}

console.log(students);

function compare(a, b) {
    if (a.averageOfScores < b.averageOfScores) {
        return -1;
    }
    if (a.averageOfScores > b.averageOfScores) {
        return 1;
    }
    return 0;
}

students.sort(compare);
students.reverse();

console.log(students);


