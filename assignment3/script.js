//################################################################################################
// const printName = (name) => {
//     return “Hi” + name;
// }
//Refactor the following function into a one-liner:
const printName=name=>"Hi " +name;
        console.log(printName("Asish"));
//################################################################################################



//################################################################################################
// const printBill = (name, bill) => {
//                      return “Hi “ + name + “, please pay: “ + bill;
//            }
// the following code using template literals:
const printBill=(name, bill)=>
        {
            return `hi ${name}, please pay: ${bill}`;
        }
        console.log(printBill("Asish", 500));
//################################################################################################



//################################################################################################
// const person = {
//                       name: “Noam Chomsky”,
//                       age: 92
//             }
           
//            let name = person.name;
//            let age = person.age;
//            console.log(name);
//            console.log(age);
//the following code such that the object properties are destructured and logged:
        const person = {
            name: "Monkey D luffy",
            age: 19
        }
        let {name , age}=person;

        console.log(name);
        console.log(age);
//################################################################################################        