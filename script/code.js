let subjects = ["Python","C++","VB.Net","JavaScript","Assembly"]
let lastElement = subjects.pop()
console.log(lastElement);
subjects.push(lastElement)
let mid= Math.floor(subjects.length/2);
console.log(subjects[mid]);