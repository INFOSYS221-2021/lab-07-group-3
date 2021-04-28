
let student = {
	id: 42069,
	firstName: "John",
  lastName: "Cena",
  username: "jcen420",
  courseList: [],
  major: [],
  degree: []
}

let course = {
	title: "InfoSys221",
  category: "InfoSys",
  categoryNumber: 6,
  description: "A course where we type code.",
  semester: 1
}

let classRoster = {
	students: [],
  courseID: "InfoSys221",
  gradeList: {
  	42069: {user:"jcena420", grades: []}
  }
}



let student1 = student
student1.id = 1
student.firstName = "Michael"
student.lastName = "Smith"
student.username = "MSMT123"
const infosys = course
student.courseList = [infosys]

console.log(student)
console.log(course)
console.log(classRoster)
