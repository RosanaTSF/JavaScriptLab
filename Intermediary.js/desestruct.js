const snowman = {
    name: 'Olaf',
    surname: 'Frozen',
    age: '3',
    profession: 'Give warm hugs'

};

console.log(snowman);

//let name = snowman.name;
//let surname = snowman.surname;
//let age = snowman.age;
//let profession = snowman.profession;

//Com desestruct:

let { name, surname, age, profession } = snowman;
console.log(name, surname, age, profession);