var carName = 'Ford'
var carYear = 2007
var personYear = 1995

function calcAge(year) {
    var currentYear = 2023
    var result = currentYear - year
    return result 
}
// Задание 1: определить члеовек или робот
function dddd(year, name) {
    if (calcAge(carName) < year) {
        console.log(`Возраст ${name} меньше 10 лет`)
    } else {
        console.log(`Возраст ${name} больше 10 лет`)
    }
}

dddd(carYear, 'машины')
dddd(personYear, 'человека')

// Задание 2: поставить любо значение вместо 10
function dddd4(year, name, comparison) {
    if (calcAge(carName) < year) {
        console.log(`Возраст ${name} меньше ${comparison} лет`)
    } else {
        console.log(`Возраст ${name} больше ${comparison} лет`)
    }
}

dddd4(carYear, 'машины', 13)
dddd4(personYear, 'человека', 67)