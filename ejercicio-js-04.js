const myName = "Renzo"
const mySurname = "Santillán"
const student = myName.concat(" ", mySurname)
const studentUpper = student.toUpperCase()
const studentLower = student.toLowerCase()
const studentLength = student.length
const firstLetterName = myName.charAt(0)
const lastLetterSurname = mySurname.charAt(mySurname.length - 1)
const studentTrimmed = student.trim().replace(" ","")
const isMyNameIncluded = student.includes(myName)

console.log(isMyNameIncluded);
