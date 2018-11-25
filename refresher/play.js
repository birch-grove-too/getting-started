
const name = 'Joe';
let age = 66;
const hasHobbies = true;

const summarizeUser = (userName, userAge, userHasHobbies) => {
    return ('Name is ' + userName + ', age is ' + userAge + ' with hobbies ' + userHasHobbies);

}

console.log(summarizeUser(name, age, hasHobbies));
